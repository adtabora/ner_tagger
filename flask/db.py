import sqlite3
import json

conn = None

class DB:
    conn = None
    def __init__(self):
        self.conn = sqlite3.connect('articles.db')

    def createTables(self):

        self.conn.execute('''
        CREATE TABLE ARTICLE(
            ID INT PRIMARY  KEY     NOT NULL,
            TITLE           TEXT    NOT NULL,
            CATEGORY        CHAR(4),
            DATE            TEXT,
            SENTENCES       TEXT,
            REVIEWED        CHAR(1),
            RELATIONSHIPS   TEXT
        );
        ''')
        print "Table created successfully";
        self.conn.commit()


    def insertArticles(self, articles):
        self.conn.executemany('''
        INSERT INTO ARTICLE (ID,TITLE,CATEGORY,DATE, SENTENCES, REVIEWED) 
        VALUES (?,?,?,?,?,?)''', articles)
        self.conn.commit()
        print "Inserted Article"

    def updateArticle(self, article):
        sentences = json.dumps(article["sentences"])
        title = json.dumps(article["title"])
        relationships = json.dumps(article["relationships"])
        print "--------"
        print article["relationships"]
        values = (title, article["category"], sentences, int(article["reviewed"]), relationships,
        article["id"] )

        self.conn.execute('''
        UPDATE ARTICLE set TITLE = ?, CATEGORY = ?, SENTENCES = ?, REVIEWED = ?, RELATIONSHIPS = ? where ID=?
        ''', values)
        self.conn.commit()
        print "Updated Article"


    def listArticles(self,start, end, reviewed=False):
        values = (start, end,int(reviewed))
        cursor = self.conn.execute('''
        SELECT ID from ARTICLE
        WHERE ID >= ? and ID< ? and REVIEWED = ?
        ''',values)
        articles = [{"id": row[0], "title": "Article "+str(row[0]) } for row in cursor]
        return articles
    
    def getArticle(self,art_id):
        values = [art_id]
        print "--- Values---"
        print values
        cursor = self.conn.execute('''
        SELECT ID, TITLE, CATEGORY, DATE, SENTENCES, RELATIONSHIPS  from ARTICLE
        WHERE ID = ?
        ''',values)

        for row in cursor:
            article = {
                "id": row[0],
                "title": json.loads(row[1]),
                "category": row[2],
                "date": row[3],
                "sentences": json.loads(row[4]),
                "relationships": json.loads(row[5]) if row[5] != None else []
            }
            print "----------"
            print row[5]
        
        return article


    def checkTables(self):
        sql = "SELECT name FROM sqlite_master WHERE type='table' AND name='ARTICLE';"

        cursor = self.conn.execute(sql)
        for row in cursor:
            return True
        return False
        
        
    def close(self):
        self.conn.close()


    value_operators = ["=", ">",">=" ,"<","<=", "!="]
    #Generic list articles that receives filter values which will be concatenated with an AND operator
    #columns is in the format of [ ("COLUNM_NAME, "OPERATOR", "VALUE" ) ... ]
    def getArticles(self, filters, columns = None, limit=None, offset=None ):

        if columns == None:
            columns = ["ID", "TITLE", "CATEGORY", "DATE", "SENTENCES", "REVIEWED"]

        sql = '''
        select %s from ARTICLE
        ''' % ", ".join(columns)
        #where clause
        values =[]
        if len(filters) > 0 :
            where = [ "%s %s ?"%(f[0],f[1]) for f in filters if f[1] in self.value_operators ]
            where += [ "%s %s %s"%(f[0],f[1],f[2]) for f in filters if f[1] in ["IS", "IS NOT","IN"] ]
            values = [ f[2] for f in filters if f[1] in self.value_operators ]
            sql += " where " + " and ".join(where)
        if limit:
            sql += " limit " + str(limit) 
        if offset:
            sql += " offset " + str(offset)

        print sql
        #execute
        cursor = self.conn.execute( sql, values )

        #get array 
        articles = cursor.fetchall()

        return articles




