describe('Car card component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('should render car cards if results found; If no results, should display "No results found" message', () => {

    if (cy.get('.car-card').should('have.length.greaterThan', 0)) {
      cy.get('.car-card').should('have.length.greaterThan', 0);
      cy.get('[data-testid="cypress-no-results"]').should('not.exist');
    } else {
      cy.get('.car-card').should('not.exist');
      cy.get('[data-testid="cypress-no-results"]').should('exist');
    }
  });

  it('should render car cards if results found; If no results, should display "No results found" message', () => {
    if (cy.get('.car-card').should('have.length.greaterThan', 0)) {
      cy.get('.car-card').should('have.length.greaterThan', 0);
      cy.get('[data-testid="cypress-no-results"]').should('not.exist');
    } else {
      cy.get('.car-card').should('not.exist');
      cy.get('[data-testid="cypress-no-results"]').should('exist');
    }
  });

  it('should check that modal for car details is not empty when opened', () => {
    cy.vehicleDetails();
    if (cy.get('[data-testid="cypress-car-details-modal"]').should('exist')) {
      // Get the modal content
      const modalContent = cy.get('[data-testid="cypress-car-details-modal"]').children('.modal-content');

      // Check if the modal content is not empty
      modalContent.should('not.be.empty');
    } 
  });
});