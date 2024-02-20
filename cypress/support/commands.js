import {
    basicPageElements, cookiePopupElements, cookiePopupTexts,
    addPlatePageElements, carPageElements, carExpectedDropdownOptions, 
    driverPageElements, nameExpectedDropdownOptions
} from '../support/page_objects'
import { opelCarData, inputData } from './data'


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
    //click yes and check if modifications appear
    cy.get(carPageElements.modificationButtons).contains('NO').should('be.visible')
    cy.get(carPageElements.modificationButtons).contains('YES').click()
    cy.get(carPageElements.modificationButtons).contains('YES').invoke('css', 'color').should('eq', carPageElements.choosenButtonTextColour)
    cy.get(carPageElements.modificationCards).should('have.length', 4)
    cy.get(carPageElements.modificationNotListed).contains('Not listed above').should('be.visible')
    //click no and modifications should not appear
    cy.get(carPageElements.modificationButtons).contains('NO').click()
    cy.get(carPageElements.modificationCards).should('not.have.length')
})

Cypress.Commands.add('carHistory', () => {
    //confirm purchase date
    cy.get(carPageElements.confirmPurchaseDateContainer).should('contain', opelCarData.yearOfManufacture)
    cy.get(carPageElements.dateConfirmButtons).contains('YES').should('be.visible')
    cy.get(carPageElements.dateConfirmButtons).contains('NO').click()
    cy.get(carPageElements.addCustomPurchaseDate).should('be.visible')
})

Cypress.Commands.add('carLegalOwner', () => {
    //check legal owner dropdown, select policy holder option
    cy.get(carPageElements.legalOwnerDropdownTrigger).click()
    cy.get(carPageElements.dropdownMenu).should('be.visible')
    cy.get(carPageElements.dropdownMenu).find(carPageElements.dropdownContainer).should(optionsContainer => {
        const actualText = optionsContainer.text();
        carExpectedDropdownOptions.forEach(expectedText => {
            expect(actualText).to.include(expectedText)
        })
    })
    cy.get(carPageElements.dropdownOptions).should('have.length', 6)
    //only 6 because as we click on the trigger, the PolicyHolder is selected as def --> it has diff class now
    cy.get(carPageElements.ownerPolicyHolderOption).click()
})

Cypress.Commands.add('carKeeper', () => {
    //check registered owner dropdown, select policy holder option
    cy.get(carPageElements.keeperDropdownTrigger).click()
    cy.get(carPageElements.dropdownMenu).should('be.visible')
    cy.get(carPageElements.dropdownMenu).find(carPageElements.dropdownContainer).should(optionsContainer => {
        const actualText = optionsContainer.text();
        carExpectedDropdownOptions.forEach(expectedText => {
            expect(actualText).to.include(expectedText)
        })
    })
    cy.get(carPageElements.dropdownOptions).should('have.length', 6)
    cy.get(carPageElements.keeperPolicyHolderOption).click()
})

Cypress.Commands.add('carHomeParking', () => {
    cy.get(carPageElements.parkAtHomeButtons).contains('NO').should('be.visible').click()
    cy.get(carPageElements.addPostcode).should('be.visible')
    cy.get(carPageElements.parkAtHomeButtons).contains('YES').click()
    cy.get(carPageElements.addPostcode).should('not.exist')
})

Cypress.Commands.add('carEstimatedMileage', () => {
    //type estimated mileage
    cy.get(carPageElements.estimatedMileageInput).should('be.enabled').type(opelCarData.estimatedMileage)
})

Cypress.Commands.add('carClickContinue', () => {
    //click on continue
    cy.get(carPageElements.continueButton).click()
})


////////////////////////////////////CAR PAGE//////////////////////////////////////////
Cypress.Commands.add('driverName', () => {
    //title dropdown
    cy.get(driverPageElements.nameTitleDropdownTrigger).click()
    cy.get(driverPageElements.dropdownMenu).should('be.visible')
    cy.get(driverPageElements.dropdownMenu).find(driverPageElements.dropdownContainer).should(optionsContainer => {
        const actualText = optionsContainer.text();
        nameExpectedDropdownOptions.forEach(expectedText => {
            expect(actualText).to.include(expectedText)
        })
    })
    cy.get(driverPageElements.dropdownContainer).contains(inputData.nameTitle).click()
    //type name
    cy.get(driverPageElements.firstNameInput).should('be.enabled').type(inputData.firstName)
    cy.get(driverPageElements.lastNameInput).should('be.enabled').type(inputData.lastName)
    //type date of birth
    cy.get(driverPageElements.dayOfBirthInput).type(inputData.dayOfBirth)
    cy.get(driverPageElements.monthOfBirthInput).type(inputData.monthOfBirth)
    cy.get(driverPageElements.yearOfBirthInput).type(inputData.yearOfBirth)
    //live in UK
    cy.get(driverPageElements.liveInTheUkButtons).contains('NO').click()
    cy.get(driverPageElements.spentInTheUkContainer).should('be.visible')
    cy.get(driverPageElements.liveInTheUkButtons).contains('YES').click()
    cy.get(driverPageElements.spentInTheUkContainer).should('not.exist')
    //kids under 16
    cy.get(driverPageElements.haveKidsDropdownTrigger).click()
    cy.get(driverPageElements.dropdownMenu).should('be.visible')
    cy.get(driverPageElements.oneKidOption).click()
    //postcode
    cy.get(driverPageElements.findAddressButton).should('be.disabled')
    cy.get(driverPageElements.postcodeInput).type(inputData.postCode)
})