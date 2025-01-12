Feature: Verify homePage functionalites

    Background:
        Given I am opening a baseURL

    Scenario: Verify Homepage Header
        Then I verify the greenKart logo on homePage
        And I verify following link text in Header
            | Top Deals      |
            | Flight Booking |
        And I verify the "searchBox" element on HomePage
        And I verify the "searchButton" element on HomePage
        And I verify the "cartInfo" element on HomePage
        And I verify the "cartIcon" element on HomePage

    Scenario Outline: Verify Search and product Section
        When I enter "<searchValue>" in searchBox
        Then <searchResults> product is displayed in search result
        And I verify the "<searchValue>" product section on HomePage

        Examples:
            | searchValue | searchResults |
            | Cucumber    | 1             |

    Scenario Outline: Add to cart functionality
        When I enter "<searchValue>" in searchBox
        Then I am adding "<searchValue>" product with quantity <quantity> to cart
        Examples:
            | searchValue | quantity |
            | Cucumber    | 5        |