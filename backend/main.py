from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # libera acesso do frontend

@app.route("/api")
def hello():
    return jsonify({"mensagem": "Olá do backend Flask! 🚀"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)