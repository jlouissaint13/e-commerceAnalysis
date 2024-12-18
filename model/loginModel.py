from flask import jsonify
from pymongo import MongoClient
from sqlalchemy import false

#For the connection to the database
client = MongoClient('mongodb://localhost:27017')
db = client['test']
userCollections = db['usersdb']

class LoginModel:
    def __init__(self,email,password):
        self.email = email
        self.password = password
        #calling the method to run when the constructor is initilized
        self.loginUser()
    def getEmail(self):
        return self.email
    def getPassword(self):
        return self.password
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


        #add logic to check if email exist
        #add logic to check if email returns a password
        #add logic to make sure email is not null

    def __str__(self):
        return f'{self.email} and {self.password}'
#testing new to this
login = LoginModel('jared@gmail.com','safe123')







