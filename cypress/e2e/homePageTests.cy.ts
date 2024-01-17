describe('Main Page test components', () => {
    it('check that home hero image exists', () => {
      cy.visit('http://localhost:3000');
      cy.get('.hero__image_element').should('have.attr', 'src');
  
      // Check if the src attribute starts with /images/
      cy.get('.hero__image_element').should('be.visible');
    });

    // Checking images for accesibility
    it('images should all have alt tags', () => {
        cy.visit('http://localhost:3000');

        cy.get('img').each(function(imgElement) {
            cy.wrap(imgElement).should('have.attr', 'alt');
            cy.wrap(imgElement).should('have.attr', 'src');
        });
    });
  });
