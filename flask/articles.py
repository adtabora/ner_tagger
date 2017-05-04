from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import processor
app = Flask(__name__)
CORS(app)

import pandas as pd
import numpy as np



@app.route("/article/list")
def getArticleList():
    try:
        processed_df = pd.read_json("../files/processed.json")
    except Exception, e:
        processed_df = processor.process_articles()

    #a temporary pagination limit. TODO: Change for a parameter
    processed_df = processed_df[processed_df["article_id"]<100]
    
    todo = processed_df[processed_df["done"]==False].article_id
    done = processed_df[processed_df["done"]==True].article_id

    todo= np.sort(todo).tolist()
    done= np.sort(done).tolist()

    todo = [{"id": x, "title": "Article " + str(x)} for x in todo]
    done = [{"id": x, "title": "Article " + str(x)} for x in done]

    return jsonify({"todo":todo, "done":done})

@app.route("/article/get/<id>")
def getArticle(id):
    processed_df = pd.read_json("../files/processed.json")

    article = processed_df[processed_df["article_id"]==int(id)]
    location = article.location.values[0]
    category = article.category.values[0]
    sentences = article.sentences.values[0]
    title = article.title.values[0]


    return jsonify({
        "id":int(id), 
        "title": title,
        "location": location,
        "category": category,
        "sentences":sentences
    })

@app.route("/article/save", methods=['POST'])
def saveArticle():

    print "-----"
    # print request.data
    json_obj = request.get_json()
    art_id = json_obj["id"]
    art_sent = json_obj["sentences"]
    location = json_obj["location"]
    category = json_obj["category"]

    #read processed
    processed_df = pd.read_json("../files/processed.json")
    index = processed_df[processed_df["article_id"]==int(art_id)].index[0]

    print "-----INDEX-------"
    print index
    print type(art_sent)

    print "- setting values"
    processed_df.loc[index,"location"] = location 
    processed_df.loc[index,"category"] = category

    processed_df["sentences"][index] = art_sent

   
    processed_df.loc[index,"done"] = True
    
    print "- saving processed json"
    processed_df.to_json("../files/processed.json")

    return jsonify({"saved":True})



if __name__ == "__main__":
    app.run()