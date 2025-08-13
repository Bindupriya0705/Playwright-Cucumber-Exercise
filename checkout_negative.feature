Feature: Checkout form validations

Background:
Given I login as "standard_user" with password "secret_sauce"
And I add product "Sauce Labs Backpack" to the cart
And I proceed to checkout

@extended @negative
Scenario: Missing first name shows error
When I enter shipping info "" "User" "98052"
Then I should see checkout error "Error: First Name is required"

@extended @negative
Scenario: Missing last name shows error
When I enter shipping info "QA" "" "98052"
Then I should see checkout error "Error: Last Name is required"

@extended @negative
Scenario: Missing postal code shows error
When I enter shipping info "QA" "User" ""
Then I should see checkout error "Error: Postal Code is required"