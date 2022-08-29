//load type definitions from cypress module
//o comando abaixo pega todos os tipos do cypress
///<reference types="cypress" />

type User = {
  name: string
  surname: string
  cpf: string
  email: string
  password: string
}

type ShowcaseAttributes ={
  name: string
}


declare namespace Cypress {
  interface Chainable {

      /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
       shouldRenderBanner(): Chainable<Element>

       /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
      shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

       /**
      * Custom command to sign up
      * @example cy.signUp(user)
      */
         signUp(user: User): Chainable<Element>

       /**
      * Custom command to sign up
      * @example cy.signIn()
      */
       signIn(email?: string, password?: string): Chainable<Element>

  }
}
