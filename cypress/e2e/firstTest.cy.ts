describe('Car card component', () => {
  it('should render car cards if results found; If no results, should display "No results found" message', () => {
    cy.visit('http://localhost:3000');

    if (cy.get('.car-card').should('have.length.greaterThan', 0)) {
      cy.get('.car-card').should('have.length.greaterThan', 0);
      cy.get('[data-testid="cypress-no-results"]').should('not.exist');
    } else {
      cy.get('.car-card').should('not.exist');
      cy.get('[data-testid="cypress-no-results"]').should('exist');
    }
  });
});