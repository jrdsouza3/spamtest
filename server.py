from flask import Flask, render_template, request, redirect, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

import json
#from users import Users
import sys


app = Flask(__name__)
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)


@app.route("/testing", methods=["POST", "GET"])
@limiter.limit("1 per day")
def tester():
    message = "This is a test message to check spamming"
    return{
        "message": message 
        }

if __name__ == "__main__":
    app.run(debug=True)