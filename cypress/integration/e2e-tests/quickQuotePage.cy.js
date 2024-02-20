import '../../support/commands'

describe.skip('Test cookies', () => {

    it('Check if cookie popup is appeared', () => {
        cy.cookiePopup()
    })

    it('Select customize cookies', () => {
        cy.customizeCookies()
        cy.verifyCustsomizedCookies()
    })

    it('Accept all cookies', () => {
        cy.acceptCookies()
        cy.verifyAcceptedCookies()
    })

    it('Reject all cookies', () => {
        cy.rejectCookies()
        cy.verifyRejectedCookies()
    })
})

describe('Test the quote process', () => {

    it('E2E', () => {
        //CAR PAGE
        cy.addPlateNumber()
        cy.checkCarData()
        cy.carModifications()
        cy.carHistory()
        cy.carLegalOwner()
        cy.carKeeper()
        cy.carHomeParking()
        cy.carEstimatedMileage()
        cy.carClickContinue()
        //DRIVER PAGE
        cy.driverName()
    })
})



