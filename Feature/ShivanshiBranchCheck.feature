Feature: Checking the Branching and Mearging functinality  

    Creating new Branch on the GitHub 

Background: I will navigate to the Calculator site

@ShivaTag    
Scenario: Branching and Mearging Add functionalty testing
When I add two numbers "313" and "2827"
Then I check output displayed should be '59'


Scenario: Branching and Mearging Add functionalty testing just for check
When I add two numbers "313" and "313"
Then I check output displayed should be '626'


@ShivaTag    
Scenario: Branching and Mearging Add functionalty testing
When I add two numbers "272" and "282"
Then I check output displayed should be '554'