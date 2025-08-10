Cypress.Commands.add('typeInStripeElement', (iframeSelector, text) => {
  cy.get(iframeSelector)
    .should($iframe => {
      expect($iframe.prop('tagName')).to.eq('IFRAME');
    })
    .then($iframe => {
      // Get the iframe's body (only works same-origin)
      const body = $iframe[0].contentDocument?.body;
      if (!body) {
        throw new Error('Cannot access Stripe iframe body due to cross-origin policy');
      }
      cy.wrap(body).find('input').type(text, { force: true });
    });
});

// cypress/support/commands.ts
Cypress.Commands.add('getStripePaymentBody', () => {
  return cy
    .get('iframe[title="Secure payment input frame"]', { timeout: 20000 })
    .should($f => expect($f[0].contentDocument?.readyState).to.eq('complete'))
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
});
