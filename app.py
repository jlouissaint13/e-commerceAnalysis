from flask import Flask
from flask_cors import CORS
from backend.Login.controller.LoginController import loginBlueprint
app = Flask(__name__)

app.register_blueprint(loginBlueprint,url_prefix='/login')
CORS(app,origins="*")

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(port=8000,debug=True)


