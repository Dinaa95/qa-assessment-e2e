import { basicPageElements, addPlatePageElements, cookiePopupElements, cookiePopupTexts, carPageElements } from '../support/page_objects'
import { opelCarData } from './data'


Cypress.Commands.add('checkMainpage', () => {
    cy.title().should('eq', basicPageElements.pageTitle)
})

////////////////////////////////////COOKIES//////////////////////////////////////////
Cypress.Commands.add('cookiePopup', () => {
    cy.get(cookiePopupElements.mainCookiePopup).should('be.visible')
    cy.get(cookiePopupElements.mainCookieText).should('contain', cookiePopupTexts.cookieText)
});

Cypress.Commands.add('acceptCookies', () => {
    cy.get(cookiePopupElements.allowAllButton).click()
})

Cypress.Commands.add('verifyAcceptedCookies', () => {
    //revisit cookie settings and check if everything is marked
    cy.get(basicPageElements.cookieRevisitButton).click()
    cy.get(cookiePopupElements.functionalSwitch).should('be.checked')
    cy.get(cookiePopupElements.performanceSwitch).should('be.checked')
    cy.get(cookiePopupElements.advertisementSwitch).should('be.checked')
    cy.get(cookiePopupElements.analyticsSwitch).should('be.checked')
    cy.get(cookiePopupElements.otherSwitch).should('be.checked')
})

Cypress.Commands.add('rejectCookies', () => {
    cy.get(cookiePopupElements.rejectAllButton).click()
})

Cypress.Commands.add('verifyRejectedCookies', () => {
    //revisit cookie settings and check if nothing marked
    cy.get(basicPageElements.cookieRevisitButton).click()
    cy.get(cookiePopupElements.functionalSwitch).should('not.be.checked')
    cy.get(cookiePopupElements.performanceSwitch).should('not.be.checked')
    cy.get(cookiePopupElements.advertisementSwitch).should('not.be.checked')
    cy.get(cookiePopupElements.analyticsSwitch).should('not.be.checked')
    cy.get(cookiePopupElements.otherSwitch).should('not.be.checked')
})

Cypress.Commands.add('customizeCookies', () => {
    //click on customize cookies
    cy.get(cookiePopupElements.customizeButton).click()
    //assert that custom cookie popup appeared
    cy.get(cookiePopupElements.customCookiePopup).should('be.visible')
    cy.get(cookiePopupElements.customCookieText).should('contain', cookiePopupTexts.customCookieText)
    //choose some of the settings and save
    cy.get(`${cookiePopupElements.functionalSwitch}, ${cookiePopupElements.performanceSwitch}, ${cookiePopupElements.advertisementSwitch}`).check()
    cy.get(cookiePopupElements.savePreferencesButton).click()
    cy.get(cookiePopupElements.customCookiePopup).should('be.not.visible')
})

Cypress.Commands.add('verifyCustsomizedCookies', () => {
    //check if the preferences were really saved & checked
    cy.get(basicPageElements.cookieRevisitButton).click()
    cy.get(cookiePopupElements.functionalSwitch).should('be.checked')
    cy.get(cookiePopupElements.performanceSwitch).should('be.checked')
    cy.get(cookiePopupElements.advertisementSwitch).should('be.checked')
    //assert that others are not checked
    cy.get(cookiePopupElements.analyticsSwitch).should('not.be.checked')
    cy.get(cookiePopupElements.otherSwitch).should('not.be.checked')
})

////////////////////////////////////CAR PAGE//////////////////////////////////////////
Cypress.Commands.add('addPlateNumber', () => {
    cy.acceptCookies()
    cy.get(addPlatePageElements.carContainer).should('contain', addPlatePageElements.carRegNumberText)
    cy.get(addPlatePageElements.regNumberField).should('be.enabled').type(opelCarData.plateNumber)
    cy.get(addPlatePageElements.infoButton).click()
    cy.get(addPlatePageElements.infoPopup).should('be.visible')
    cy.get(addPlatePageElements.findCarButton).click()
})

Cypress.Commands.add('checkCarData', () => {
    const propertiesToCheck = [
        'carName',
        'yearOfManufacture',
        'transmissionType',
        'imported',
        'engineSize',
        'fuelType',
        'steering',
    ];
    propertiesToCheck.forEach((property) => {
        cy.get(carPageElements.carGeneralContainer).should('contain', opelCarData[property])
    })
})

Cypress.Commands.add('carModifications', () => {
    
})