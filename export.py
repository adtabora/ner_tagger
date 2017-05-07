import pandas as pd
import numpy as np
import bs4 #beautiful soup

from flask.db import DB


#Exports to csv in a format to train by category (without NE tags)
def exportCategory():
    db = DB()
    articles = db.getArticles([("reviewed","=",1)])
    db.close()

    found_size = len(articles)

    # get the original title and content
    base_df = pd.read_csv("./files/articles.csv")  
    data = []
    for art_index, article in base_df.iterrows():
        if art_index == found_size:
            break
        raw_text = article["content"]
        raw_title = unicode(article["title"],"utf8")
        soup = bs4.BeautifulSoup(raw_text, 'html.parser')
        text = soup.get_text().replace("\n","")

        #add a row 
        data.append( [art_index, raw_title, text, articles[art_index][2]] )

    articles_df = pd.DataFrame(data,columns=["id","title","content","category"])

    articles_df.to_csv("./files/documents.csv",index=False, encoding='utf-8')

exportCategory()    