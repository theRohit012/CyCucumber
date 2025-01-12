Feature: Verify homePage functionalites

    Background:
        Given I am opening a baseURL

    Scenario: Verify Application Logo
        Then I verify the greenKart logo on homePage

    Scenario: Verify Application Link Header
        Then I verify following link text in Header
            | Top Deals      |
            | Flight Booking |

    Scenario: Verify Search Functionality
        Then I verify the "searchBox" element on HomePage
        And I verify the "searchButton" element on HomePage
        When I enter "<searchValue>" in searchBox

        Examples:
            | searchValue |
            | Cucumber    |