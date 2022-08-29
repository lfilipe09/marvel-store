/// <reference path="../support/index.d.ts" />

describe('empty spec', () => {
  it('should render home sections', () => {
    //visitar a página
    //A barra acessa o baseURl configurado no cypress.json
    cy.visit('/')
    cy.findByText(/Click here/i).click()
    cy.signUp({
      cpf: '34670975127',
      email: 'example@gmail.com',
      name: 'Luis',
      surname: 'Lima',
      password: 'examPLE123!@#'
    })
    cy.wait(3000)
    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({name: "Main releases"})
    cy.shouldRenderShowcase({name: "Also check:"})
  })
})
