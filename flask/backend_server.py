from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin



app = Flask(__name__)
CORS(app)

import pandas as pd
import numpy as np

from db import DB

@app.route("/test")
def test():
    return jsonify({"test" : "hello tester", 
        "deep":{
            "id": 1,
            "items" : [ 1,2,3,4,5],
            "obj": {
                "name": "object1",
                "description": "description of object"
            }
        }
    })

@app.route("/article/list")
def getArticleList():
    tagged = request.args["tag"]
    category = request.args["category"]
    limit = request.args["limit"]
    offset = request.args["offset"]

    filters = []
    #TODO: change field REVIEWED with tagged
    if tagged == "tagged":
        filters.append( ("REVIEWED","=","1") )
    elif tagged == "untagged":
        filters.append( ("REVIEWED","=","0") )
    
    # elif tagged == "all":
        
    if category == "None":
        filters.append( ("CATEGORY","=", "") )
    elif category != "all":
        filters.append( ("CATEGORY","=",category) )
    


    print "-----------"
    print filters
    print 
    print 

    db = DB()
    rows = db.getArticles(filters, columns=["ID"], limit=limit, offset=offset)

    count = db.getArticles(filters, columns=["count(ID)"])[0][0]
    db.close()

    data = [{"id": row[0], "title": "Article "+str(row[0]) } for row in rows]

    return jsonify({
        "count": count,
        "data": data
    })

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