Feature: Checking the Calculator functionalty by doing the addition operation 

    Shivanshi we are Checking for the additional functionalty

@ShivaTag    
Scenario: Calculator Add functionalty testing
Given I will navigate to the Calculator site
When I add two numbers "31" and "28"
Then I check output displayed should be '59'


Scenario: Calculator Add functionalty testing just for check
Given I will navigate to the Calculator site
When I add two numbers "31" and "31"
Then I check output displayed should be '62'


@ShivaTag    
Scenario: Calculator Add functionalty testing
Given I will navigate to the Calculator site
When I add two numbers "27" and "28"
Then I check output displayed should be '54'
