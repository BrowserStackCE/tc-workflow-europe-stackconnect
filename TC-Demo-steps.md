# Test Companion Demo Workflow

* Step 1 - Generate 5 functinal Test cases for the url https://medistack.vercel.app/. Atleast one test case should be for appointment confirmation workflow. Once the test cases are generated, add them to the Test Case repository. Use test.automation@medistack.com and password as testingisfun99 for exploring the application

* Step 2 - Create a new project and a folder inside the  project in BrowserStack TM and add the test cases created.

* Step 3 - Click on the Automate button next to the test case  `Appointment Confirmation Full Booking Workflow`

* Step 4 - When it prompts for plan confirmation, select change of plan and provide the credentials `Use test.automation@medistack.com and password as testingisfun99 for exploring the application`


* Step 5 - Integrate with BrowserStack Autoamte. Generate or update the `browserstack.yml` file to optimize platform coverage. 
    ```
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
    ``` 

* Step 6 - Include accessibility tests while running the functional test that was generated.

* Step 7 - Can you refactor the test case generated to follow the Page object model pattern.