from flask import Flask, render_template, request, jsonify
import json
from scrapper.scrapper import search

app = Flask(__name__)


@app.route('/', methods=["GET"])
def welcome():
    return render_template('index.html')


@app.route('/search', methods=["GET"])
def search_and_display():
    # get key from form
    search_key = request.args['searchtext']

    # use search function of scrapper to search data
    results = search(search_key)
    search_results = [result.serialize() for result in results]

    return render_template('results.html', searchkey=search_key, search_results=search_results)
