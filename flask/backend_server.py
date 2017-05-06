from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin



app = Flask(__name__)
CORS(app)

import pandas as pd
import numpy as np

from db import DB



@app.route("/article/list")
def getArticleList():
    
    db = DB()
    todo = db.listArticles(0, 100, reviewed=False)
    done = db.listArticles(0, 100, reviewed=True)
    db.close()

    return jsonify({"todo":todo, "done":done})

@app.route("/article/get/<id>")
def getArticle(id):
    db = DB()
    article = db.getArticle(id)

    for sent in range(len(article["sentences"])):
        article["sentences"][sent] = [{"word": word[0],"tag":word[1]} for word in article["sentences"][sent]] 
    db.close()
    return jsonify(article)

@app.route("/article/save", methods=['POST'])
def saveArticle():

    print "-----"
    # print request.data
    json_obj = request.get_json()

    for sent in range(len(json_obj["sentences"])): 
        json_obj["sentences"][sent] = [ [word["word"],word["tag"] ] for word in json_obj["sentences"][sent] ]

    json_obj["reviewed"] = True

    db = DB()
    db.updateArticle(json_obj)
    db.close()

    return jsonify({"saved":True})



if __name__ == "__main__":
    app.run()