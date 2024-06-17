import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { CONSTANTS } from '../../../support/constants';
import { LOCATORS } from '../../../support/locators';

let art1, art2

Given("I login Wiki with {} and {}", (username, pwd) => {
   cy.get(LOCATORS.LOGIN).type(`${username}`);
   cy.get(LOCATORS.PWD).type(`${pwd}{enter}`);
})

When("I add two articles to your watchlist", () => {
    cy.visit(CONSTANTS.RANDOM_PAGE_URL);
    cy.wait(1000);
    cy.get(LOCATORS.ARTICLE_TITLE).as('a1');
    cy.get('@a1').then((a1) => {
                              cy.log(a1.text());
                              art1 = a1.text();
                            });
    cy.get(LOCATORS.ADD_TO_WATCHLIST_STAR).click();
    cy.wait(1000);
    cy.visit(CONSTANTS.RANDOM_PAGE_URL);
    cy.wait(1500);
    cy.get(LOCATORS.ARTICLE_TITLE).as('a2');
    cy.get('@a2').then((a2) => {
                                  cy.log(a2.text());
                                  art2 = a2.text();
                                });
    cy.get(LOCATORS.ADD_TO_WATCHLIST_STAR).click();
    cy.wait(1000);
});

Then("I removes one of the articles from your watchlist", () => {
    cy.go('back');
    cy.get(LOCATORS.REMOVE_FROM_WATCHLIST_STAR).should("be.visible");
    cy.get(LOCATORS.REMOVE_FROM_WATCHLIST_STAR).click();
    cy.wait(1000);
});

Then("I makes sure that the second article is still present in the watchlist", () => {
    cy.go('forward')
    cy.get(LOCATORS.REMOVE_FROM_WATCHLIST_STAR).should("be.visible");
});

Then("I am navigating to the watchlist", () => {
    cy.visit(CONSTANTS.WATCHLIST_PAGE_URL);
    cy.wait(1000);
    cy.get(LOCATORS.WATCHLIST_ITEM).should('be.visible')
});

Then("The title matches", () => {
    cy.log(art2)
    cy.get(LOCATORS.WATCHLIST_ITEM_LABEL).should("have.text", art2);
});


