*** Tech challenge from Endpoint accepted ***

![alt text](https://github.com/nyevhen/endpoint-cypress-challenge/blob/main/screenshots/Screenshot%202024-06-16%20at%203.11.21%E2%80%AFPM.png)

## Requirements
To code and run tests in this framework locally you'll need:
- npm
- typescript
- a cup of coffee (preferably java)

## Installation
To download latest and greatest source of this framework run:

```git clone https://github.com/nyevhen/endpoint-cypress-challenge.git```

Execute in the root of project:

```npm install```

And then:

```npm install typescript -g```


## Test execution
To run test execute next command in the root of the project:

```npx cypress run```

You can see test report in console on test execution complete.

In case of failure, screenshots can be seen here:

```cypress/screenshots```

![alt text](https://github.com/nyevhen/endpoint-cypress-challenge/blob/main/screenshots/err-screenshot.png)

By default, it will be executed in headless mode.
If you like to debug test you can execute:

```npx cypress open```

Start e2e testing in desired browser.

![alt text](https://github.com/nyevhen/endpoint-cypress-challenge/blob/main/screenshots/e2e.png)
![alt text](https://github.com/nyevhen/endpoint-cypress-challenge/blob/main/screenshots/start.png)

Select feature you like to run and debug

![alt text](https://github.com/nyevhen/endpoint-cypress-challenge/blob/main/screenshots/feat.png)

Now you can execute your test and see your test execution in spec panel

![alt text](https://github.com/nyevhen/endpoint-cypress-challenge/blob/main/screenshots/spec.png)