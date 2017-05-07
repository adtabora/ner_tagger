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
            REVIEWED        CHAR(1)
        );
        ''')
        print "Table created successfully";
        self.conn.commit()


    def insertArticles(self, articles):
        self.conn.executemany('''
        INSERT INTO ARTICLE (ID,TITLE,CATEGORY,DATE, SENTENCES, REVIEWED) 
        VALUES (?,?,?,?,?,?)''', articles);
        self.conn.commit()
        print "Inserted Article"

    def updateArticle(self, article):
        sentences = json.dumps(article["sentences"])
        values = (article["category"], sentences, int(article["reviewed"]), article["id"])

        self.conn.execute('''
        UPDATE ARTICLE set CATEGORY = ?, SENTENCES = ?, REVIEWED = ? where ID=?
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
        SELECT ID, TITLE, CATEGORY, DATE, SENTENCES  from ARTICLE
        WHERE ID = ?
        ''',values)

        for row in cursor:
            article = {
                "id": row[0],
                "title": row[1],
                "category": row[2],
                "date": row[3],
                "sentences": json.loads(row[4]),
            }
        
        return article


    def checkTables(self):
        sql = "SELECT name FROM sqlite_master WHERE type='table' AND name='ARTICLE';"

        cursor = self.conn.execute(sql)
        for row in cursor:
            return True
        return False
        
        
    def close(self):
        self.conn.close()

    #Generic list articles that receives filter values which will be concatenated with an AND operator
    #columns is in the format of [ ("COLUNM_NAME, "OPERATOR", "VALUE" ) ... ]
    def getArticles(self, filters):
        sql = '''
        select ID, TITLE, CATEGORY, DATE, SENTENCES, REVIEWED from ARTICLE
        '''
        #where clause
        where = [ "%s%s ?"%(f[0],f[1]) for f in filters ]
        values = [ f[2] for f in filters ]
        sql += " where " + " and ".join(where)
        #execute
        cursor = self.conn.execute( sql, values )
        #return 
        def format_article(row):
            return {
                "id": row[0],
                "title": row[1],
                "category":row[2],
                "date":row[3],
                "sentences":row[4],
                "reviewed":row[5],
            }

        #cursor 
        articles = cursor.fetchall()

        return articles




