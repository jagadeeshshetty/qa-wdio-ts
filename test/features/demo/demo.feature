Feature: Validate Google Search Results

  @demo
  Scenario Outline: Validate the google search result
    Given I navigate to the Google search page
    When I search for <searchText>
    And I click on the first search result
    Then the URL should match <expURL>

    Examples:
      | testCaseID | searchText | expURL                |
      | DEMO_0001  | WDIO       | https://webdriver.io/ |
