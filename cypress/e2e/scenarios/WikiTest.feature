Feature: Wiki watchlist test
  Scenario Outline: User can add pages to watchlist and remove them from it
    Given I login Wiki with <username> and <pwd>
    When I add two articles to your watchlist
    And I removes one of the articles from your watchlist
    Then I makes sure that the second article is still present in the watchlist
    And I am navigating to the watchlist
    And The title matches

    Examples:
      | username  | pwd                     |
      | Neugene82 | StanWritesCodeForFun1!  |