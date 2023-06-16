# XYZ-APP

## Building the App and Image
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

## Testing

### Unit Testing
The application leverages the Jest testing framework. 
To execute the unit test local, run `npm test` from the root of the repo. Sample output from a successful test run. 
```
➜  XYZ-APP git:(main) ✗ npm test 

> xyz-app@1.0.0 test
> jest

  console.log
    Log hit at 1686887193877

      at log (src/app.js:5:13)

 PASS  tests/app.test.js
  Test the root path
    ✓ It should respond the GET method (42 ms)
  Test the liveness probe
    ✓ It should respond the GET method (4 ms)
  Test the readiness probe
    ✓ It should respond the GET method (4 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.493 s, estimated 6 s
Ran all test suites.
```