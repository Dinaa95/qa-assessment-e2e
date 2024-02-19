import {quickQuoteLanding} from '../../support/page_objects'

describe('Test quick quote page', () => {
    let baseUrl = Cypress.config().baseUrl
    beforeEach(() => {
        cy.visit(baseUrl)
    })
    it('Visit landing page and assert', () => {
        cy.title().should('eq', quickQuoteLanding.pageTitle)
    })    

    it('Setup customised cookies', () => {
        cy.get('.cky-title')
        .should('eq', quickQuoteLanding.cookieText)

        cy.get('.cky-btn-customize').click()

        cy.get('.cky-preference-title')
          .should('contain', 'Choose your cookies.')

        cy.get('#ckySwitchperformance').check()
    })
})