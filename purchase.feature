Feature: Purchase Feature

Scenario: Validate successful purchase text
Given I login as "standard_user" with password "secret_sauce"
When I add product "Sauce Labs Backpack" to the cart
And I proceed to checkout
And I enter shipping info "QA" "User" "98052"
And I place the order
Then I should see the purchase success text "THANK YOU FOR YOUR ORDER"

Scenario: Validate purchase with multiple items
Given I login as "standard_user" with password "secret_sauce"
When I add the following products to the cart:
| name |
| Sauce Labs Backpack |
| Sauce Labs Bike Light |
And I proceed to checkout
And I enter shipping info "QA" "User" "98052"
And I place the order
Then I should see the purchase success text "THANK YOU FOR YOUR ORDER"