import pandas as pd
import numpy as np
import json
import bs4
from flask.db import DB



#Exports to csv in a format to train by category (without NE tags)
def exportCategory():
    db = DB()
    # get all of the tagged articles
    filters = [("CATEGORY", "IN", "('Criminal','Other')")] #[("REVIEWED","=",1)]
    articles = db.getArticles(filters, columns=["ID", "CATEGORY","DATE"] )
    db.close()


    found_size = len(articles)

    indices = [art[0] for art in articles]

    # get the original title and content
    base_df = pd.read_csv("./files/articles.csv")  
    base_df = base_df.loc[indices]

    print " ---- "
    print found_size
    print base_df.shape

    data = []
    index = 0
    for art_index, article in base_df.iterrows():
        
        raw_text = article["content"]
        raw_title = unicode(article["title"],"utf8")
        soup = bs4.BeautifulSoup(raw_text, 'html.parser')
        text = soup.get_text().replace("\n","")

        #add a row 
        data.append( [art_index, raw_title, text, articles[index][1],article["date"]] )
        index += 1

    articles_df = pd.DataFrame(data,columns=["id","title","content","category","date"])

    articles_df.to_csv("./files/documents.csv",index=False, encoding='utf-8')

def exportTags():
    db = DB()
    # get all of the tagged articles that are category criminal
    # filters = [ ("CATEGORY", "=", "Criminal")] #("REVIEWED","=",1)
    filters = [ ("CATEGORY", "=", "Criminal-Other")] #("REVIEWED","=",1)
    articles = db.getArticles(filters, columns=["ID","TITLE","SENTENCES","RELATIONSHIPS"] )
    db.close()
    #for convinience create a DataFrame
    print len(articles)
    df = pd.DataFrame(articles,columns=["article_id","title","content","relationships"])
    print df.shape

    #convert title and content strings into a json
    df.loc[:,"title"] = df.title.apply(lambda x: json.loads(x))
    df.loc[:,"content"] = df.content.apply(lambda x: json.loads(x) )
    df.loc[:,"relationships"] = df.relationships.apply(lambda x: json.loads(x) if x != None else []  )


    df.to_csv("./files/criminal_hn_articles.csv",index=False)




exportCategory()    
exportTags()