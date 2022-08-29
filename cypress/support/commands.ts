/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('signUp', (user: User) => {
  cy.findByPlaceholderText(/First name/i).type(user.name)
  cy.findByPlaceholderText(/Last name/i).type(user.surname)
  cy.findByText('E-mail').type(user.email)
  cy.findByText(/^password/i).type(user.password)
  cy.findByText(/CPF/i).type(user.cpf)
  cy.wait(500)
  cy.findByRole('button', { name: /Create account/i }).click()
  cy.wait(500)
})

Cypress.Commands.add('shouldRenderBanner', () => {

  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', {name: 'Thunderbolts (2022) #4'})
    cy.findByRole('link', {name: /Read more/i})

    cy.get('.slick-dots > :nth-child(2) > button').click()
    //para esperar meio segundo entre uma transição e outra
    cy.wait(500)

    cy.findByRole('heading', {name: 'X-Men Legends (2022) #4'})
    cy.findByRole('link', {name: /Read more/i})

    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)

    cy.findByRole('heading', {name: 'X-Men Legends (2022) #3'})
    cy.findByRole('link', {name: /Read more/i})
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({name}) => {
    cy.findByRole('heading', {name}).should('exist')
})

