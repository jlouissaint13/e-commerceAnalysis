from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
app = Flask(__name__)

CORS(app,origins="*")
@app.route('/')
def hello_world():
    return 'Hello World!'
@app.route('/test')
def test():
    return 'Testing'

@app.route('/recieve',methods=['POST'])
def recieve():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')
    print(username,password)
    return jsonify({"username":username,"password":password})




if __name__ == '__main__':
    app.run(port=8000,debug=True)
