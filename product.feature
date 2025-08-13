Feature: Product sorting

# Precondition: user is logged in and on the products page
Background:
    Given I open the "https://www.saucedemo.com/" page

@price
Scenario Outline: Validate product sort by price
When I sort products by "<sort>"
Then the selected sort option should be "<sort>"
And the prices should be in "<order>" order
# Optional: also assert the first/last visible product names after sort
And the first product should be "<first>"
And the last should be "<last>"

Examples:
| sort | order | first | last |
| lohi | ascending | Sauce Labs Onesie | Sauce Labs Fleece Jacket|
| hilo | descending | Sauce Labs Fleece Jacket | Sauce Labs Onesie |