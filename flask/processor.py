import bs4 #beautiful soup
import pandas as pd
import numpy as np
from nltk.tokenize import wordpunct_tokenize

from db import DB
import json


def process_articles():
    print "- read articles csv"
    base_df = pd.read_csv("../files/articles.csv")    

    print "- processing articles"
    articles = []
    for art_index, article in base_df.iterrows():
        raw_text = article["content"]
        raw_title = unicode(article["title"],"utf8")

        soup = bs4.BeautifulSoup(raw_text, 'html.parser')
        text = soup.get_text().replace("\n","")
        sentences = text.split(".")
        sentences = [wordpunct_tokenize(sent) for sent in sentences ]
        for index in range(len(sentences)):
            sentences[index] = [ [word,"none"] for word in sentences[index]]

        #append
        articles.append([
            art_index,
            raw_title,
            "", #category
            "", #date
            json.dumps(sentences,encoding="utf-8",ensure_ascii=False),
            int(False), #reviewed
        ])

    print "- saving to DB"
    db = DB()
    # db.createTables()
    db.insertArticles(articles)
    db.close()

    print "- Done."

process_articles()