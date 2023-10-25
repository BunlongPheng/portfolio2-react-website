from flask import Flask, jsonify, request
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import bcrypt
import os
import sys
import time


# Instantiation
app = Flask(__name__)
#Here client holds Atlas URI, and db links database called mapss_userdb
#users hold collection name called mapss_user.
client = MongoClient("mongodb+srv://padma1234:padma1234@cluster0.h0x71.mongodb.net/mapss_userdb?retryWrites=true&w=majority")#host uri    
db = client.mapss_userdb   #Select the database
users = db.mapss_user#Select the collection name 
#The follwoing code pushes document(data) from the user created to atlas.

CORS(app)



@app.route('/register', methods=['POST','GET'])
def createUser():
    if request.method == 'POST':
        existing_user = users.find_one({'verify':request.json['verify']}) or users.find_one({'name':request.json['name']}) or users.find_one({ 'email':request.json['email']})
    
        if existing_user is None:
            hashpass = bcrypt.hashpw(request.json['password'].encode('utf-8'), bcrypt.gensalt())
            id = users.insert_one({
                'verify':request.json['verify'],
                'name': request.json['name'],
                'email': request.json['email'],
                'password': hashpass
                })
            return jsonify('Registerd successfully')
        return jsonify('User already exists')

@app.route('/get', methods=['GET'])
def readUser():#Register
    user = [] #Array for holding requested details
    for doc in users.find():#for loop iterates through find result and populates
        user.append({
            '_id': str(ObjectId(doc['_id'])),
            'verify':doc['verify'],
            'name': doc['Name'],
            'email': doc['email'],
            'password': doc['password']
        })
    return jsonify(user)

@app.route('/login', methods=['POST'])
def login():
    login_user = users.find_one({ 'email':request.json['email']})

    if login_user:
        if bcrypt.hashpw(request.json['password'].encode('utf-8'), login_user['password']) == login_user['password']:
            
            return jsonify('successfully')

    return jsonify('Invalid username/password combination')

if __name__ == "__main__":
    app.run(debug=True)
