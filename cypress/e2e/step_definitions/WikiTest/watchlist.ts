import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

let art1, art2

Given("I login Wiki with {} and {}", (username, pwd) => {
   cy.get("#wpName1").type(`${username}`);
   cy.get("#wpPassword1").type(`${pwd}{enter}`);
})

When("I add two articles to your watchlist", () => {
    cy.visit("https://en.wikipedia.org/wiki/Special:Random");
    cy.wait(1000);
    cy.get("#firstHeading > span").as('a1');
    cy.get('@a1').then((a1) => {
                              cy.log(a1.text());
                              art1 = a1.text();
                            });
    cy.get("#ca-watch").click();
    cy.wait(1000);
    cy.visit("https://en.wikipedia.org/wiki/Special:Random");
    cy.wait(1000);
    cy.get("#firstHeading > span").as('a2');
    cy.get('@a2').then((a2) => {
                                  cy.log(a2.text());
                                  art2 = a2.text();
                                });
    cy.get("#ca-watch").click();
    cy.wait(1000);
});

Then("I removes one of the articles from your watchlist", () => {
    cy.go('back');
    cy.get("#ca-unwatch").should("be.visible");
    cy.get("#ca-unwatch").click();
    cy.wait(1000);
});

Then("I makes sure that the second article is still present in the watchlist", () => {
    cy.go('forward')
    cy.get("#ca-unwatch").should("be.visible");
});

Then("I am navigating to the watchlist", () => {
    cy.visit("https://en.wikipedia.org/wiki/Special:EditWatchlist");
    cy.wait(1000);
    cy.get("#editwatchlist-ns0 > legend > span.oo-ui-labelElement-label").should('be.visible')
});

Then("The title matches", () => {
    cy.log(art2)
    cy.get("#ooui-php-7 > div > div > label > span.oo-ui-labelElement-label > a").should("have.text", art2);
});


