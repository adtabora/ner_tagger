from flask import Flask
from flask import jsonify
app = Flask(__name__)

import pandas as pd


sentences_df = None




def initializeTodo():
    sentences_df = pd.read_json("../files/tagged_articles.json")

    todo_df = pd.DataFrame()
    todo_df.loc[:,"article_id"] = sentences_df.article_id
    todo_df.loc[:,"sent_id"] = sentences_df.sent_id
    todo_df.loc[:,"words"] = sentences_df.tagged_sent.apply(lambda sent: [ {"word":word[0],"tag":"None"} for word in sent])

    todo_df.to_json("../files/todo.json")
    return todo_df
    

    
        

       




@app.route("/hello")
def hello():
    return "hello"


@app.route("/article/list")
def getArticleList():
    try:
        todo_df = pd.read_json("../files/todo.json")
    except Exception, e:
        todo_df = initializeTodo()
    
    todo = todo_df.values.tolist()
    print "------------"
    print type(todo)
    print type([])


    return jsonify({"todo":todo, "done":[]})

@app.route("/article/get/<int:post_id>'")
def getArticle(id):

    return {"id":id, "title":"", "sentences":[]}



if __name__ == "__main__":
    app.run()