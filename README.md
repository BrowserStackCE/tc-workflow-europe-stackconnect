# Test Companion Demo Workflow
This is a sample repo to get started with BrowserStack Test Companion

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Setup

* Clone the repo `git clone https://github.com/BrowserStackCE/tc-workflow-europe-stackconnect.git` and run `cd tc-workflow-europe-stackconnect`.
* Ensure that the Test Companion agent is installed
* Set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` if not already configured in the Test Companion agent
* Copy the contents of `workflows/simple-aut-agent.md`
* Open Test Companion agent and select the `Manage Test Companion Rules & Agents` button
* Navigate to the agents tab
* Click on the `+` (plus) button next to the Workspace Agents
* Provide a name to the agent simple-aut-agent.md and paste the contents copied from `workflows/simple-aut-agent.md`



## Running your tests

- Click on the New Task (`+`) button of the Test Companion agent
- In the prompt box type `/simple-aut-agent` and select the agent from the drop down.
- Add a prompt next to the agent name `Test url - https://medistack.vercel.app/` and press enter


## Notes
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
