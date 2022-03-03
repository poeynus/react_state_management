
// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true);
    })
})

describe('My First Test', () => {
    it('Visit', () => {
        cy.visit('https://example.cypress.io')
    })
})

describe('The Home Page', () => {
    beforeEach(() => {
      cy.exec('yarn start');
    });
  
    it('successfully loads', () => {
      cy.visit('/');
    });
  });

describe('The Home Page', () => {
    beforeEach(() => {
      cy.exec('yarn start');
    });
  
    it('successfully loads', () => {
      cy.visit('/');
    });
    it('get Text', () => {
      cy.contains('Hi').click();
    });
  });