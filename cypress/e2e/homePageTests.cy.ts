describe('Main Page test components', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    // Check home hero image
    it('check that home hero image exists', () => {
      cy.visit('http://localhost:3000');
      cy.get('.hero__image_element').should('have.attr', 'src');
  
      // Check if the src attribute starts with /images/
      cy.get('.hero__image_element').should('be.visible');
    });

    // Checking images for accesibility
    it('Images should all have alt tags', () => {
        cy.visit('http://localhost:3000');

        cy.get('img').each(function(imgElement) {
            cy.wrap(imgElement).should('have.attr', 'alt');
            cy.wrap(imgElement).should('have.attr', 'src');
        });
    });

    // Checking input for search bar
    it('Check search bar inputs', () => {
        cy.get('[data-testid="car-make-search-input"]').type('Audi')
        cy.get('[data-testid="car-model-search-input"]').type('Q5') 
        cy.get('[data-testid="vehicle-search-bar"]').last().click()
    });
});
