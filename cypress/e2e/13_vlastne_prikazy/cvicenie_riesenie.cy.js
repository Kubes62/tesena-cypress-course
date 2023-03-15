/// <reference types="cypress" />


// #1: vytvor si tri nové príkazy. jeden na vytvorenie boardu
// druhý na vytvorenie listu a tretí na vytvorenie karty
// použi ich v teste

//vytvoření boardu
Cypress.Commands.add('addBoard', (boardName) => {

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type(`${boardName}{enter}`)

})

//vytvoření listu
Cypress.Commands.add('addList', (listName) => {

  cy.get('[data-cy=add-list-input]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type(`${listName}{enter}`)

})

//vytvoření karty

Cypress.Commands.add('addCard', (cardName) => {

  cy.get('[data-cy=new-card]')
    .click()

  cy.get('[data-cy=new-card-input]')
    .type(`${cardName}{enter}`)
  
})

//beforeEach( () => {
 // cy.request('POST', '/api/reset')
//})

it('vytvorenie nového boardu, listu a karty', () => {

  cy.visit('/')
  //vytvoření nového boardu
  cy.addBoard('Nakupování')
   //vytvoření nového listu
  cy.addList('Potraviny')
   //vytvoření nové karty
  cy.addCard('chleba')
  
});