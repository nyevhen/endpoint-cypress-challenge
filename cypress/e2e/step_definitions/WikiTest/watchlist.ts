import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on a Wiki login page", () => {
   cy.visit("https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page");
})

Given("I login Wiki with {} and {}", (username, pwd) => {
   cy.get("#wpName1").type(`${username}`);
   cy.get("#wpPassword1").type(`${pwd}{enter}`);
})

When("I add two articles to your watchlist", () => {
    cy.visit("https://en.wikipedia.org/wiki/Niels_Bohr");
    cy.get("#ca-watch").click();
    cy.visit("https://en.wikipedia.org/wiki/Nikola_Tesla");
    cy.get("#ca-watch").click();
});

Then("I removes one of the articles from your watchlist", () => {
    cy.visit("https://en.wikipedia.org/wiki/Niels_Bohr");
    cy.get("#ca-unwatch").click();
    cy.get("#ca-watch").should("be.visible");
});

Then("I am navigating to the watchlist", () => {
    cy.visit("https://en.wikipedia.org/wiki/Special:EditWatchlist");
    cy.get("#editwatchlist-ns0 > legend > span.oo-ui-labelElement-label").should('be.visible')
});

Then("I makes sure that the second article is still present in the watchlist", () => {
   cy.get("#ooui-php-7 > div > div > label > span.oo-ui-labelElement-label > a").should("be.visible");
});

Then("The title matches", () => {
    cy.get("#ooui-php-7 > div > div > label > span.oo-ui-labelElement-label > a").should("have.text","Nikola Tesla");
});

Then("Teardown", () => {
    cy.visit("https://en.wikipedia.org/wiki/Special:EditWatchlist");
    cy.get("#ooui-php-2").click();
    cy.get("#ooui-php-14 > button > span.oo-ui-labelElement-label").click();
});

