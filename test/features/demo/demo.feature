Feature: Demo Feature

  Demo Feature Description
  Scenario Outline: Validate the google search result
    Given I open the google search page
    When I search with <searchText> keyword
    # And I click on the first search result
    # Then the URL should match <expectedURL>

    Examples:
      | testcaseID | searchText | expUrl  |
      | DEMO_0001  | WDIO       | Value 3 |
