from crypt import methods
from gzip import FNAME
from multiprocessing.connection import address_type

from click import password_option
from flask import Flask,Blueprint,render_template,jsonify,request
from sqlalchemy import false

from backend.Login.model.createModel import CreateModel

createBlueprint = Blueprint('register',__name__)


#debugging print statements
@createBlueprint.route('/submit',methods=['POST'])
def receiveAccount():

    data = request.get_json()
    fname = data.get('fname')
    lname = data.get('lname')
    email = data.get('email')
    password = data.get('password')
    address = data.get('address')
    phoneNumber = data.get('phoneNumber')
    print(fname,lname,email,password,address,phoneNumber)
    createModel1 = CreateModel(fname,lname,email,password,address,phoneNumber)
    if(createModel1.createUser() == 0):
        print(email,password)
        return jsonify({"message": "Valid submission continue"}),200
    elif(createModel1.createUser() == 1):
        return jsonify({"message": "Account already exists"}),400
    return jsonify({"message": "Invalid submission" }),401
