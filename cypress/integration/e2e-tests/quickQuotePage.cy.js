import { quickQuoteLanding, cookiePopupTexts, cookiePopupElements } from '../../support/page_objects'
import '../../support/commands'

describe('Test quick quote page', () => {
    let baseUrl = Cypress.config().baseUrl
    beforeEach(() => {
        cy.visit(baseUrl)
    })
    it('Check if cookie popup is appeared', () => {
        cy.cookiePopup()
    })

    it('Select customize cookies', () => {
        cy.customizeCookies()
        cy.verifyCustsomizedCookies()
    })

    it('CAR page', () => {
        cy.get('.car-wrapper').should('contain', 'Enter your registration number.')
        
    })

})
