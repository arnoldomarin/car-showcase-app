describe('Car card component', () => {
  it('should render at least one car card', () => {
    cy.visit('http://localhost:3000');
    cy.wait(500); // Wait for car cards to be rendered

    // Check if at least one car card is rendered
    cy.get('.car-card').should('have.length.greaterThan', 0);
  });
});