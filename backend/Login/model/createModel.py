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
       
    def createUser(self):
        #Will take create user data and insert it into the database
        user = userCollections
        
        userData = {
            "email":self.email,
            "password":self.password
        }
        if(self.userExists(self.email) == False):
            user.insert_one(userData)
            return True
        print("Error")
        return False
            
              
        
        
      
    def userExists(self,email):
        #if none then user does not exist
        if(userCollections.find_one(email) == None): return False
        #if user does exist then return true
        return True