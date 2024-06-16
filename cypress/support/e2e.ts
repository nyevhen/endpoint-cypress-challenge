// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
  console.log("Before steps");
  cy.visit("https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page");
  cy.wait(1000);
});

after(() => {
  console.log("After steps");
  cy.visit("https://en.wikipedia.org/wiki/Special:EditWatchlist");
  cy.wait(1000);
  cy.get("#ooui-php-2").click();
  cy.get("#ooui-php-14 > button > span.oo-ui-labelElement-label").click();
  cy.wait(1000);
})