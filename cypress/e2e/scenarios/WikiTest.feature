Feature: Wiki
  Scenario Outline: Watchlist test
    Given I am on a Wiki login page
    And I login Wiki with <username> and <pwd>
    When I add two articles to your watchlist
    And I removes one of the articles from your watchlist
    And I am navigating to the watchlist
    Then I makes sure that the second article is still present in the watchlist
    And The title matches
    And Teardown

    Examples:
      | username  | pwd                     |
      | Neugene82 | StanWritesCodeForFun1!  |