import '../../support/commands'

describe('Test cookies', () => {

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
        //Check the webpage title
        cy.checkMainpage()
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
        //Answer the question, if NO --> additional dropdown
        cy.driverInUk()
        //Select number of kids
        cy.driverHasKids()
        //Provide postcode and check the address
        cy.driverAddress()
        //Add email and phone number
        cy.driverContact()
        //Accept email marketing
        cy.driverMarketing()
        //Add employment status
        cy.driverEmployment()
        //Select licence type and years of having licence
        cy.driverLicence()
        //Confirm medical condition, if YES --> is it a known issue
        cy.driverMedicalCondition()
        //Add an incident
        cy.driverInchident()
        //Select no convictions
        cy.driverConvictions()
        //Add an extra driver
        cy.driverAdd()
        //Delete the extra driver
        cy.driverDelete()
        //Click on continue
        cy.driverClickContinue()

        //COVER PAGE
        //Select start date by calculate today + 5 days
        //Excess cover with money
        //Select payment frequency
        //Check renewal input
        cy.cover()
    })
})