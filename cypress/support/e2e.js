import '../../workshop-scripts/testSetupHook'
import '../../workshop-scripts/infoCommand'
import '@bahmutov/cy-api'

Cypress.Commands.add('dataCy', (selector) => {

  cy.get(`[data-cy=${selector}]`)

})