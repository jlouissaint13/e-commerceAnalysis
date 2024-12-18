class userModel:
    def __init__(self,email,password):
        self.email = email
        self.password = password
    def setEmail(self,email):
        self.email = email
    def setPassword(self,password):
        self.password = password
    def __str__(self):
        return f'{self.email} and {self.password}'


email = "jared@gmail.com"
password = '123'

user = userModel(email,password)



print(user.__str__())