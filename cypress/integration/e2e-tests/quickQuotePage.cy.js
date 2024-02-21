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
        //CAR PAGE//
        //Accept all cookies and type plate number
        cy.addPlateNumber()
        //Check if all relevant car data appeared on the page
        cy.checkCarData()
        //Verify modification YES/NO buttons + YES --> additional options appeared
        cy.carModifications()
        //Confirm purchase date + NO --> additional input field appeared
        cy.carHistory()
        //Check legal owner dropdown menu
        cy.carLegalOwner()
        //Check car keeper dropdown menu
        cy.carKeeper()
        //Verify that car parking near home if NO --> postal code can be added 
        cy.carHomeParking()
        //Type estimated mileage
        cy.carEstimatedMileage()
        //Click on continue button
        cy.carClickContinue()

        //DRIVER PAGE
        //Select name title and type first and last name
        cy.driverName()
        //Type birthday
        cy.driverBirthday()
        //
        cy.driverInUk()
        cy.driverHasKids()
        cy.driverAddress()
        cy.driverContact()
        cy.driverMarketing()
        cy.driverEmployment()
        cy.driverLicence()
        cy.driverMedicalCondition()
        cy.driverInchident()
        cy.driverConvictions()
        cy.driverAdd()
        cy.driverDelete()
        cy.driverClickContinue()
        //COVER PAGE
        cy.cover()
    })
})



