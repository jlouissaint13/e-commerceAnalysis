from flask import jsonify
from pymongo import MongoClient
from sqlalchemy import false

#For the connection to the database
client = MongoClient('mongodb://localhost:27017')
db = client['usersdb']
userCollections = db['users']

class LoginModel:
    #Start with false authetication status that we will set to true if loginUser is true

    def __init__(self,email,password):
        self.email = email
        self.password = password


    def getEmail(self):
        return self.email
    def getPassword(self):
        return self.password
    #function to check if login exists inside the database
    def loginUser(self):

        user = userCollections.find_one({'email': self.email})
        #If and only if user exist then check for password
        #return true otherwise continue and return false
        if user:
            if self.password == user['password']:
                print("Login successful")
                return True
        print("Your username or password is incorrect")
        return False

    def __str__(self):
        return f'{self.email} and {self.password}'
#testing new to this








