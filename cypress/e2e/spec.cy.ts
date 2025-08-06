// cypress/e2e/home.cy.ts
describe('Home page', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('Find the top').should('be.visible')
  })
})
