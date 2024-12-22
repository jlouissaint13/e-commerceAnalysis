from flask import jsonify
from pymongo import MongoClient
#For the connection to the database
client = MongoClient('mongodb://localhost:27017')
db = client['test']
userCollections = db['usersdb']

class CreateModel:
    def __init__(self,email,password):
        self.email = email
        self.password = password
        self.createUser()
    def createUser(self):
        #Will take create user data and insert it into the database
        userData = {
            "email":self.email,
            "password":self.password
        }
        userCollections.insert_one(userData)