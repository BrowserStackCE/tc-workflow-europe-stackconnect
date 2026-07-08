# Test Companion Demo Workflow

* Step 1 - Test Case Generation

```text
Generate 5 functional Test cases for the url [https://finstack-alpha.vercel.app/](https://finstack-alpha.vercel.app/). At least one test case should be for the e2e flow to get a quote for "Health Insurance". Once the test cases are generated, add them to the Test Case repository. Use test.automation@medistack.com and password as testingisfun99 for exploring the application
```

* Step 2 - Create a new Project `FinStack E2E Tests` and add a folder inside the project in BrowserStack TM and add the test cases created.

* Step 3 - Click on the Automate button next to the test case  

```text
  e2e flow to get a quote for "Health Insurance" 
```
Ask the agent to use the credentials at the end of the prompt

```text
Certain elements like the "Insurance" navigation link could occur multiple times on a page. To prevent Playwright strict mode violations, append `.first()` to the locators or use `exact: true` and always pick the first occurrence of these fields.
Use test.automation@medistack.com and password as testingisfun99 for automating the application
```

* Step 4 - Integrating with BrowserStack

```text
Integrate with BrowserStack Automate. Generate or update the browserstack.yml file to optimize platform coverage and include selfHeal capability. 
    
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
          - browserName: playwright-webkit
            osVersion: 16
            deviceName: iPhone 14     

    Use the projectName as FinStack E2E Tests. Also include testObservability flag to true and selfHeal: true in SDK.
    Include BrowserStack accessibility by using BrowserStack SDK tests while running the functional test.
``` 

* Step 5 - Refactor the existing code

```text
  Can you refactor the test case generated to follow the Page object model pattern.
```  

* Step 6 - Self-Healing Demo

```text
  Demonstrate BrowserStack's Self-Healing capability by deliberately testing against changed DOM elements. Modify the automation script so that on the login page, it first clicks the "Enable" button next to the 'Self Heal / Percy Toggle Disabled' label before proceeding with the e2e Health Insurance quote flow.
```