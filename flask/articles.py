from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
from flask import request
app = Flask(__name__)
CORS(app)

import pandas as pd
import numpy as np


def initializeSentences():
    tagged_df = pd.read_json("../files/tagged_articles.json")

    sentences_df = pd.DataFrame()
    sentences_df.loc[:,"article_id"] = tagged_df.article_id
    sentences_df.loc[:,"sent_id"] = tagged_df.sent_id
    sentences_df.loc[:,"words"] = tagged_df.tagged_sent.apply(lambda sent: [ {"word":word[0],"tag":"none"} for word in sent])
    sentences_df.loc[:, "done"] = False

    sentences_df.to_json("../files/sentences.json")
    return sentences_df
    
@app.route("/hello")
def hello():
    return "hello"

@app.route("/article/list")
def getArticleList():
    try:
        sentences_df = pd.read_json("../files/sentences.json")
    except Exception, e:
        sentences_df = initializeSentences()
    
    todo = sentences_df[sentences_df["done"]==False].article_id.unique()
    done = sentences_df[sentences_df["done"]==True].article_id.unique()

    todo= np.sort(todo).tolist()
    done= np.sort(done).tolist()

    todo = [{"id": x, "title": "Article " + str(x)} for x in todo]
    done = [{"id": x, "title": "Article " + str(x)} for x in done]

    return jsonify({"todo":todo, "done":done})

@app.route("/article/get/<id>")
def getArticle(id):
    
    sentences_df = pd.read_json("../files/sentences.json")
    article_sentences = sentences_df[sentences_df["article_id"]==int(id)]
    
    sentences = []
    for index,row in article_sentences.sort_values(by="sent_id").iterrows():
        sentences.append(row.words)


    return jsonify({"id":int(id), "title":"Article "+id, "sentences":sentences})

@app.route("/article/save", methods=['POST'])
def saveArticle():

    print "-----"

    # print request.data
    json_obj = request.get_json()
    art_id = json_obj["id"]
    art_sent = json_obj["sentences"]
    print art_sent[0]

    sentences_df = pd.read_json("../files/sentences.json")
    index = sentences_df[sentences_df["article_id"]==int(art_id)].index

    sentences_df.loc[index,"words"] = art_sent 
    sentences_df.loc[index,"done"] = True

    sentences_df.to_json("../files/sentences.json")

    return jsonify({"saved":True})



if __name__ == "__main__":
    app.run()