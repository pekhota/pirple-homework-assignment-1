# Homework Assignment #1

## The Assignment
Please create a simple "Hello World" API. Meaning:
1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route `/hello`, you should return a welcome message, in JSON format. This message can be anything you want.

## Result
1. RESTful JSON API Application with route `/hello` which responds with `{"message":"Hello Pirple!"}` message
2. Application supports `production` (default) and `staging` environments
3. Application supports HTTP and HTTPS

## Setup
To generate self-signed HTTPS certificates run bash script `bash make.sh` inside `./https` folder.
To just run app execute `node index.js`.

## Check list
1. Parsing Request Paths [x] 
2. Parsing HTTP Method [x]
3. Parsing Query Strings [x]
4. Parsing headers [x]
5. Parsing Payloads [x]
6. Routing [x]
7. Returning JSON + Content-type [x]
8. Configuration [x]
9. Https [x]
10. /Ping [x]
11. /hello [x]  
