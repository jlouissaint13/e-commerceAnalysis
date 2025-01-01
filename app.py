from flask import Flask
from flask_cors import CORS
from backend.Login.controller.loginController import loginBlueprint
from backend.Login.controller.createController import createBlueprint
app = Flask(__name__)

app.register_blueprint(loginBlueprint,url_prefix='/login')
app.register_blueprint(createBlueprint,url_prefix='/register')
CORS(app,origins="*")


if __name__ == '__main__':
    app.run(port=8000,debug=True)


