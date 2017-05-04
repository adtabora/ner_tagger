import bs4 #beautiful soup
import pandas as pd
import numpy as np
from nltk.tokenize import wordpunct_tokenize


def process_articles():
    print "- read articles csv"
    base_df = pd.read_csv("../files/articles.csv")    

    print "- processing articles"
    articles = []
    for art_index, article in base_df.iterrows():
        raw_text = article["content"]
        raw_title = article["title"]

        soup = bs4.BeautifulSoup(raw_text, 'html.parser')
        text = soup.get_text().replace("\n","")
        sentences = text.split(".")
        sentences = [wordpunct_tokenize(sent) for sent in sentences ]
        for index in range(len(sentences)):
            sentences[index] = [{"word":word,"tag":"none"} for word in sentences[index]]

        #append
        articles.append([
            art_index,
            raw_title,
            sentences
        ])

    print "- save processed articles to json"
    processed_df = pd.DataFrame(articles,columns=["article_id","title","sentences"])

    processed_df.loc[:, "done"] = False
    processed_df.loc[:,"location"] = ""
    processed_df.loc[:,"category"] = ""

    processed_df.to_json("../files/processed.json")

    print "- Done."

    return processed_df