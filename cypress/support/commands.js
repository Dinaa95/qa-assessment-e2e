import { quickQuoteLanding, cookiePopupTexts, cookiePopupElements } from '../support/page_objects'

/////////////COOKIES//////////////////
Cypress.Commands.add('cookiePopup', () => {
    cy.get(cookiePopupElements.mainCookiePopup).should('be.visible');
    cy.get(cookiePopupElements.mainCookieText).should('contain', cookiePopupTexts.cookieText);
});

Cypress.Commands.add('customizeCookies', () => {
    //click on customize cookies
    cy.get('.cky-btn-customize').click()

    //assert that custom cookie popup appeared
    cy.get('.cky-preference-center').should('be.visible')
    cy.get('.cky-preference-title').should('contain', cookiePopupTexts.customCookieText)

    //choose some of the settings and save
    cy.get('#ckySwitchfunctional, #ckySwitchperformance, #ckySwitchadvertisement').check()
    cy.get('.cky-btn-preferences').click()
    cy.get('.cky-preference-center').should('be.not.visible')
})

Cypress.Commands.add('verifyCustsomizedCookies', () => {
    //check if the preferences were really saved & checked
    cy.get('.cky-btn-revisit-wrapper').click()
    cy.get('#ckySwitchfunctional, #ckySwitchperformance, #ckySwitchadvertisement').should('be.checked')

    //assert that others are not checked
    cy.get('#ckySwitchanalytics, #ckySwitchother').should('not.be.checked')
})

/////////////CAR PAGE/////////////
Cypress.Commands.add('checkMainpage', () => {
    cy.title().should('eq', quickQuoteLanding.pageTitle)
})