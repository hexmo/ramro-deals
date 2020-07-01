from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=["GET"])
def welcome():
    return render_template('index.html')

@app.route('/search',methods=["GET"])
def search():
    searchkey = request.args['searchtext']
    return render_template('results.html',searchkey = searchkey)