# News Article NE Tagger

This is a simpe manual NE (Named Entity Tagger) for scraped news articles or any kind of article in the form of Title - Content. Useful to generate your own corpora with NE tags. 

The webapp is based on AngularJS served by a lite nodejs server and a Flask server as a backend that uses SQL Lite as a Database. It is assumed that previously it has been scraped the articles and stored in a csv file named articles.csv .

Right now this is an alpha version as this project is still work in progress.

** This is the first MVP version. It is still a work in progress **
### Prerequisites
  - python 2.7
  - npm 
  - sqlite3
  - pip


### Installation
  - run `npm install` to install node and angular dependencies
  - place articles.csv into the /files directory
  - run `pip install flask flask_cors sqlite3 nltk bs4 pandas numpy`
  - run `python ./createDB.py` to create and populate the Database based on the articles.csv
  
### Run servers
  - run `python ./flask/articles.py` to start the backend server
  - run `npm start` to start the nodejs server that will serve the angular app
  
  
### articles.csv
The articles.csv file should have the following columns:
  - id: <integer> 
  - title: <string>
  - content: <string>
  

