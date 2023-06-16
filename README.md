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
### Security Testing
The solution leverages the Snyk platform for Software Composition Analysis to validate open source components for vulnerabilities. Snyk SCA can be ran locally and is executed within the GitHub Action workflow `Build and Deploy`.

To execute Snyk SCA locally, install the CLI from [here](https://docs.snyk.io/snyk-cli/install-the-snyk-cli) and run `snyk test` from the root of the repo. A sample output is listed below. 
```
➜  XYZ-APP git:(main) ✗ snyk test

Testing /Users/lorenzo/labs/github/XYZ-APP...

Organization:      fairway-independent-mortgage-corporation
Package manager:   npm
Target file:       package-lock.json
Project name:      xyz-app
Open source:       no
Project path:      /Users/lorenzo/labs/github/XYZ-APP
Licenses:          enabled

✔ Tested 58 dependencies for known issues, no vulnerable paths found.
```
## Deployment

The application leverages Kubernetes to facilitate deployment via a Deloyment. The deployment manifest contents are within `deploy.yaml`. The deployment is further orchestrated within the GitHub Action workflow `Build and Deploy`. 

The deployment is executed within the worklow via pull request to `main`. It is validated by successfully calling the readiness probe at `/ready`. If any of Testing or Deployment validations fail, the workflow will fail and stop. 