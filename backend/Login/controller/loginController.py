from flask import Flask,Blueprint, render_template, jsonify, request
from sqlalchemy import false

from backend.Login.model import loginModel
loginBlueprint = Blueprint('login',__name__)
LoginModel = loginModel.LoginModel
# authStatus = False

@loginBlueprint.route('/submit',methods=['POST'])
def receiveLogin():
    data = request.get_json()

    username = data.get('email')
    password = data.get('password')
    print(username,password)
    loginModel1 = LoginModel(username,password)
    if (loginModel1.loginUser()):

        return jsonify({"message": "Valid account continue"}), 200
    return jsonify({"message": "Failure to authenticate"}), 401


