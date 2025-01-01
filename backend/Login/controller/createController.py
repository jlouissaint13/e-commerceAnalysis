from crypt import methods

from click import password_option
from flask import Flask,Blueprint,render_template,jsonify,request
from sqlalchemy import false

from backend.Login.model.createModel import CreateModel

createBlueprint = Blueprint('Register',__name__)

CreateModel = CreateModel

@createBlueprint.route('/submit',methods=['POST'])
def receiveAccount():
    data = request.get_json()
    
    username = data.get('username')
    password = data.get('password')
    print(username,password)
    createModel1 = CreateModel(username,password)
    if(createModel1.createUser()):
        return jsonify({"message: Valid submission continue"}),200
    return jsonify({"message: Invalid submission" }),401
