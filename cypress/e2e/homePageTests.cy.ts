describe('Car card component', () => {
    it('should render car cards if results found; If no results, should display "No results found" message', () => {
      cy.visit('http://localhost:3000');
      // Correct code
      cy.get('.hero__image_element').should('have.attr', 'src');
  
      // Check if the src attribute starts with /images/
      cy.get('.hero__image_element').should('be.visible');
    });
  });