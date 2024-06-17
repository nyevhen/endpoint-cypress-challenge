import './commands'
import { CONSTANTS } from './constants';
import { LOCATORS } from './locators';

before(() => {
  console.log("Before steps");
  cy.visit(CONSTANTS.WIKI_URL);
  cy.wait(1000);
});

after(() => {
  console.log("After steps");
  cy.visit(CONSTANTS.WATCHLIST_PAGE_URL);
  cy.wait(1000);
  cy.get(LOCATORS.WATCHLIST_SELECT_ALL_CHECKBOX).click();
  cy.get(LOCATORS.WATCHLIST_REMOVE_BTN).click();
  cy.wait(1000);
})