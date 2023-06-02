# XYZ-APP
This is sample app for the XYZ POC

To run app locally
```
npm install express
node src/index.js
```

To validate the app is running
```
curl http://localhost:3001
# sample response: {"message":"Automate all the things!","timestamp":"1685592902552"}
```

To build Docker image and run container locally
```
docker build -t xyz-app .   
docker run -dp 3001:3001 xyz-app
```
Validate the container is successfully running with the same curl test

#test