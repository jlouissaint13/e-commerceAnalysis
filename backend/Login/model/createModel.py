from gzip import FNAME

from flask import jsonify
from pymongo import MongoClient
#For the connection to the database
client = MongoClient('mongodb://localhost:27017')
db = client['usersdb']
userCollections = db['users']

class CreateModel:
    def __init__(self,fname,lname,email,password,address,phoneNumber):
        self.fname = fname
        self.lname = lname
        self.email = email
        self.password = password
        self.address = address
        self.phoneNumber = phoneNumber
    def createUser(self):
        #Will take create user data and insert it into the database
     
        
        if(self.userExists(self.email) == False):
            userCollections.insert_one({"fname" : self.fname,"lname":self.lname,"email":self.email,"password":self.password,
                                        "address":self.address,"phoneNumber":self.phoneNumber})
            print("This is the user created account info for debugging purposes: " , self.email)
            return True
        print("Error")
        return False
            
              
        
        
      
    def userExists(self,email):
        #if none then user does not exist
        if(userCollections.find_one(email) == None): return False
        #if user does exist then return true
        return True