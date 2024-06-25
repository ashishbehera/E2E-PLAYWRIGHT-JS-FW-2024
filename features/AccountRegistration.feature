Feature: Account Registration

 @AccountRegistration
  Scenario: Navigate to Account Registration Page
  Given I am into Home Page
  When User clicks on My Account Link
  And User clicks on Register Link
  Then User navigates to Account Registration Page

 @AccountRegistration
  Scenario Outline: Sucessfully create an account
  Given I am into Home Page
  When User clicks on My Account Link
  And User clicks on Register Link
  And User navigates to Account Registration Page
  And User enters first name as "<firstName>"
  And User enters last name as "<lastName>"
  And User enters email as "<email>"
  And User enters telephone as "<telephone>"
  And User enters password as "<password>"
  And User enters confirm password as "<confirmPassword>"
  And User clicks on checkbox
  When User clicks on continue button
  Then Validate message as "<message>" in my account page

  Examples:
   |firstName  |lastName |email |telephone |password   |confirmPassword|message                         |
   |RadheShyam |Das      |VALID |9876543210 |rsd@12345 |rsd@12345      |Your Account Has Been Created! |

 @AccountRegistration
  Scenario Outline: Mandatory Validation for all the input fields
  Given I am into Home Page
  When User clicks on My Account Link
  And User clicks on Register Link
  And User navigates to Account Registration Page
  And User enters first name as "<firstName>"
  When User clicks on continue button
  Then Validate Mandatory fiels validation for "<inputField>" as "<ValMsg>" for field "<index>"

  Examples:
   |firstName  |inputField|ValMsg                                          |index|
   |           |fisrt name|First Name must be between 1 and 32 characters! | 0   |
   |           |last name |Last Name must be between 1 and 32 characters!  | 1   |
   |           |email     |E-Mail Address does not appear to be valid!     | 2   |
   |           |telephone |Telephone must be between 3 and 32 characters!  | 3   |
   |           |password  |Password must be between 4 and 20 characters!   | 4   |
