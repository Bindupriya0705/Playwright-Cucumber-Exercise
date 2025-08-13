Feature: Login

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Given I am on the login page
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    #Given I am on the login page
    When I try to login with username "locked_out_user" and password "secret_sauce"
    Then I should see login error "Incorrect credentials"
    
  # TODO: Add a step to validate the error message received