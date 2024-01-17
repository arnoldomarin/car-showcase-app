export {}
declare global {
    namespace Cypress {
        interface Chainable {
            vehicleDetails(): Chainable<void>;
        }
    }
}