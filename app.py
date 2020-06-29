from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

@app.route('/', methods=["GET", "POST"])
def welcome():
    return render_template('index.html')
