Feature: Checking the Bank form for two modules 
    Shivanshi Bank modules check for Banking domen work 

Scenario Outline: Bank module verification First Module check 
Given I Lauch Login page for Bankchecking
When I enter "<userName>" and "<passWord>" in loging 
Then I click on "Login" button 
And I check for login text

Examples:
    | userName | passWord |
    | Shivanshi  | Kale  |
    | Trisha  | KaleOne  |
    | Suhasini  | Abhijit  |
    | Dakshu  | Kale  |



