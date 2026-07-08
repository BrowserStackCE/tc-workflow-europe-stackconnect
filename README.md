# Test Companion Demo Workflow
This is a sample repo to get started with BrowserStack Test Companion

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Setup

* Clone the repo's specific branch by running `git clone -b BStackbank https://github.com/BrowserStackCE/tc-workflow-europe-stackconnect.git` and then run `cd tc-workflow-europe-stackconnect`.
* Ensure that the Test Companion agent is installed
* Set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` if not already configured in the Test Companion agent
* Copy the contents of the `stlc-workflow.md` file. 
* Click on the `+` (plus) button next to the Workspace Skills.
* Open Test Companion agent and select `Rules & Skills`.
* Navigate to the `Skills` tab.
* Provide a name to the skill `explore-aut-agent` and paste the contents copied from `stlc-workflow.md`. 

## Running your tests

* Click on the New Task (`+`) button of the Test Companion agent
* In the prompt box type `/explore-aut-agent` and select the skill from the drop down.
* Add a prompt next to the skill name `Test url - https://finstack-alpha.vercel.app/` and press enter.

## Notes
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)