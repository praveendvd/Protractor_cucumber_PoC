Feature: Google search
  Scenario Outline: Log in with given API
    Given I navigates to google
    And searches for '<input>'
    Then I should see '<this>'

Examples:
|input|this|
|test|validkey|
|test2|fail|
