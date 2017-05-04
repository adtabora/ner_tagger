import sqlite3
import json

conn = None

class DB:
    conn = None
    def init(self):
        self.conn = sqlite3.connect('example.db')

    def createTables():

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


    def insertArticle(self, article):
        values = (article.id, article.title, "", article.date, "", 0)
        self.conn.execute('''
        INSERT INTO ARTICLE (ID,TITLE,CATEGORY,DATE, SENTENCES, REVIEWED) 
        VALUES (?,?,?,?,?,?)''', values);
        self.conn.commit()
        print "Inserted Article"

    def updateArticle(self, article):
        sentences = json.dumps(article.sentences)
        values = (article.category, sentences, article.reviewed, article.id)
        self.conn.execute(''''
        UPDATE ARTICLE set CATEGORY = ?, SENTENCES = ? REVIEWED= ? where ID=?
        ''', values)
        self.conn.commit()
        print "Updated Article"


    def listArticles(self,start, end, reviewed=False):
        values = (start, end,int(reviewed))
        cursor = self.conn.execute(''''
        SELECT ID from ARTICLE
        WHERE ID >= start and ID<END and REVIEWED = ?
        ''')
        articles = [{"id": row[0], "title": "Article "+str(row[0]) } for row in cursor]
        return articles
    
    def getArticle(art_id):
        values = (art_id)
        cursor = self.conn.execute(''''
        SELECT ID, TITLE, CATEGORY, DATE, SENTENCES  from ARTICLE
        WHERE ID = ?
        ''')

        article = {
            "id": cursor[0][0],
            "title": cursor[0][1],
            "category": cursor[0][2],
            "date": cursor[0][3],
            "sentences": json.loads(cursor[0][4]),
        }
        
        return article
        
        
    def close(self):
        self.conn.close()


