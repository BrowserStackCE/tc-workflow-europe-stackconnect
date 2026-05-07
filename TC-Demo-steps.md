# Test Companion Demo Workflow

* Step 1 - Test Case Generation

```
Generate 5 functinal Test cases for the url https://medistack.vercel.app/. Atleast one test case should be for appointment confirmation workflow. Once the test cases are generated, add them to the Test Case repository. Use test.automation@medistack.com and password as testingisfun99 for exploring the application

```

* Step 2 - Create a new Project `MediStack E2E Tests` and add a folder inside the project in BrowserStack TM and add the test cases created.

* Step 3 - Click on the Automate button next to the test case  

```
  Appointment Confirmation Full Booking Workflow or End to En d workflow 
```
Ask the agent to use the credentials at the end of the prompt

```
Use test.automation@medistack.com and password as testingisfun99 for automating the application

```

* Step 4 - Integrating with BrowserStack

```

Integrate with BrowserStack Automate. Generate or update the browserstack.yml file to optimize platform coverage. 
    
        platforms:
          - os: Windows
            osVersion: 11
            browserName: chrome
            browserVersion: 143.0
          - browserName: playwright-webkit
            osVersion: Tahoe
            browserVersion: 26.4
            os: OS X
          - browserName: chrome
            osVersion: 12.0
            deviceName: Samsung Galaxy S22 Ultra     

    Use the projectName as MediStack E2E Tests

``` 

* Step 5 - Accessibility workflow

```
  Include BrowserStack accessibility by using BrowserStack SDK tests while running the functional test.

```

* Step 6 - Refactor the existing code

```
  Can you refactor the test case generated to follow the Page object model pattern.

```  