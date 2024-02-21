import {
    basicPageElements, cookiePopupElements, cookiePopupTexts,
    addPlatePageElements, carPageElements, carExpectedDropdownOptions,
    driverPageElements, nameExpectedDropdownOptions, employmentExpDropdownOpt,
    licenceTypeExpDropdownOpt, incidentTypeExpDropdownOpt, coverPageElements,
    excessExpDropdownOpt
} from '../support/page_objects'
import { opelCarData, inputData } from './data'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////COOKIES///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    cy.get(`${cookiePopupElements.functionalSwitch}, ${cookiePopupElements.performanceSwitch},
       ${cookiePopupElements.advertisementSwitch}`).check()
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////CAR PAGE//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Cypress.Commands.add('checkMainpage', () => {
    cy.title().should('eq', basicPageElements.pageTitle)
})

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
    cy.get(carPageElements.modificationButtons).contains('YES').invoke('css', 'color')
        .should('eq', carPageElements.choosenButtonTextColour)
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
    cy.get(basicPageElements.notChosenDropDownOption).should('have.length', 6)
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
    cy.get(basicPageElements.notChosenDropDownOption).should('have.length', 6)
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////DRIVER PAGE///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
})

Cypress.Commands.add('driverBirthday', () => {
    //type date of birth
    cy.get(driverPageElements.dayOfBirthInput).type(inputData.dayOfBirth)
    cy.get(driverPageElements.monthOfBirthInput).type(inputData.monthOfBirth)
    cy.get(driverPageElements.yearOfBirthInput).type(inputData.yearOfBirth)
})

Cypress.Commands.add('driverInUk', () => {
    //live in UK
    cy.get(driverPageElements.liveInTheUkButtons).contains('NO').click()
    cy.get(driverPageElements.spentInTheUkContainer).should('be.visible')
    cy.get(driverPageElements.liveInTheUkButtons).contains('YES').click()
    cy.get(driverPageElements.spentInTheUkContainer).should('not.exist')
})

Cypress.Commands.add('driverHasKids', () => {
    //kids under 16
    cy.get(driverPageElements.haveKidsDropdownTrigger).click()
    cy.get(driverPageElements.dropdownMenu).should('be.visible')
    cy.get(driverPageElements.dropdownContainer).contains(inputData.numberOfKids).click()
})

Cypress.Commands.add('driverAddress', () => {
    //add address
    cy.get(driverPageElements.findAddressButton).should('be.disabled')
    cy.get(driverPageElements.postcodeInput).type(inputData.postCode)
    cy.get(driverPageElements.findAddressButton).click()
    cy.get(driverPageElements.addressDropdownTrigger).should('be.visible').click()
    cy.get(driverPageElements.dropdownContainer).contains(inputData.fullAddress).click()
    cy.get(driverPageElements.addressContainer).should('contain', inputData.firstAddressLine)
        .and('contain', inputData.secondAddressLine).and('contain', inputData.city).and('contain', inputData.postCode)
    cy.get(driverPageElements.editAddressButton).should('be.visible').and('be.enabled')
})

Cypress.Commands.add('driverContact', () => {
    //add email and Mobile Number
    cy.get(driverPageElements.emailInput).type(inputData.emailAddress)
    cy.get(driverPageElements.mobileInput).type(inputData.mobileNumber)
})

Cypress.Commands.add('driverMarketing', () => {
    //allow marketing offers
    cy.get(driverPageElements.offerContactByEmailSwitch).click().should('have.class', 'active')
    cy.get(driverPageElements.offerContactByPostSwitch).should('not.have.class', 'active')
    cy.get(driverPageElements.offerContactByPhoneSwitch).should('not.have.class', 'active')
})

Cypress.Commands.add('driverEmployment', () => {
    cy.get(driverPageElements.employmentDropdownTrigger).click()
    cy.get(driverPageElements.dropdownMenu).find(driverPageElements.dropdownContainer).should(optionsContainer => {
        const actualText = optionsContainer.text();
        employmentExpDropdownOpt.forEach(expectedText => {
            expect(actualText).to.include(expectedText)
        })
    })
    //when select Self employed, 2 more option should appear
    cy.get(driverPageElements.dropdownContainer).contains('Self employed').click()
    cy.get(driverPageElements.selfEmployedIndustryInput).should('be.visible')
    cy.get(driverPageElements.selfEmployedOccupationInput).should('be.visible')
    //select actual employment status
    cy.get(driverPageElements.employmentDropdownTrigger).click()
    cy.get(driverPageElements.dropdownContainer).contains(inputData.employmentStatus).click()
})

Cypress.Commands.add('driverLicence', () => {
    //check dropdown and select the type of driving licence
    cy.get(driverPageElements.licenceTypeDropdownTrigger).click()
    cy.get(driverPageElements.dropdownMenu).find(driverPageElements.dropdownContainer).should(optionsContainer => {
        const actualText = optionsContainer.text();
        licenceTypeExpDropdownOpt.forEach(expectedText => {
            expect(actualText).to.include(expectedText)
        })
    })
    cy.get(driverPageElements.dropdownContainer).contains(inputData.drivingLicenceType).click()
    //select the years of having driving licence
    cy.get(driverPageElements.licenceAgeDropdownTrigger).click()
    cy.get(driverPageElements.dropdownContainer).contains(inputData.yearsOfHavingLicence).click()
    //select no claims discount years
    cy.get(driverPageElements.licenceNoClaimDiscountTrigger).click()
    cy.get(driverPageElements.dropdownContainer).contains(inputData.yearsOfNoClaimsDiscount).click()
})

Cypress.Commands.add('driverMedicalCondition', () => {
    //check if clicking on YES, the condition is known buttons appear
    cy.get(driverPageElements.medicalConditionButtons).contains('YES').click()
    cy.get(driverPageElements.medicalConditionIsKnownButtons).should('be.visible')
    cy.get(driverPageElements.medicalConditionButtons).contains('NO').click()
})

Cypress.Commands.add('driverInchident', () => {
    //click on yes and check the form
    cy.get(driverPageElements.incidentButtons).contains('YES').click()
    cy.get(driverPageElements.formTitle).should('be.visible')
    //select incident type
    cy.get(driverPageElements.incidentTypeDropDownTrigger).click()
    cy.get(driverPageElements.dropdownMenu).find(driverPageElements.dropdownContainer).should(optionsContainer => {
        const actualText = optionsContainer.text();
        incidentTypeExpDropdownOpt.forEach(expectedText => {
            expect(actualText).to.include(expectedText)
        })
    })
    cy.get(driverPageElements.dropdownContainer).contains(inputData.incidentType).click()
    //type incident month and year
    cy.get(driverPageElements.incidentMonthInput).type(inputData.incidentMonth)
    cy.get(driverPageElements.incidentYearInput).type(inputData.wrongIncidentYear)
    // give the right year
    cy.get(driverPageElements.incidentMonthInput).click()
    cy.get(driverPageElements.incidentDateError).should('contain.text', 'older than five years old')
    cy.get(driverPageElements.incidentYearInput).clear().type(inputData.incidentYear)
    //fauld
    cy.get(driverPageElements.myFaultButtons).contains('NO').click()
    //no claims discount
    cy.get(driverPageElements.loseNoClaimsDiscountButtons).contains('NO').click()
    //add incident
    cy.get(driverPageElements.addIncidentButton).click()
    //check if incident appeared
    cy.get(driverPageElements.generalAddedBox).invoke('text').should('include', inputData.incidentType)
})

Cypress.Commands.add('driverConvictions', () => {
    cy.get(driverPageElements.motoringConvictionButtons).contains('YES').click()
    cy.get(driverPageElements.formOverlay).should('be.visible')
    cy.get(driverPageElements.formCancelButton).click()
    cy.get(driverPageElements.motoringConvictionButtons).contains('NO').invoke('css', 'color')
        .should('eq', driverPageElements.choosenButtonTextColour)
    cy.get(driverPageElements.anyConvictionButtons).contains('NO').click()
})

Cypress.Commands.add('driverAdd', () => {
    cy.get(driverPageElements.addDriverButton).click()
    cy.get(driverPageElements.formOverlay).should('be.visible').invoke('text')
        .should('include', driverPageElements.addDriverFormTitle)
    cy.get(driverPageElements.addDriverAgreeCheckbox).check()
    cy.get(driverPageElements.confirmAddDriverButton).click()
    cy.get(driverPageElements.firstNameInput).should('have.value', '')
    cy.get(driverPageElements.lastNameInput).should('have.value', '')
    cy.get(driverPageElements.addMoreDriversInfoText).should('contain.text', driverPageElements.countOfDriversCanBeAddedText)
})

Cypress.Commands.add('driverDelete', () => {
    cy.get(driverPageElements.removeNewDriverButton).click()
    cy.get(driverPageElements.confirmRemoveNewDriverButtons).contains(driverPageElements.confirmRemoveButtonText).click()
})

Cypress.Commands.add('driverClickContinue', () => {
    //click on continue
    cy.get(driverPageElements.continueButton).click()
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////COVER PAGE////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Cypress.Commands.add('calculateChosenDate', () => {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + inputData.coverStartDateDelayInDays)
    const chosenDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    return cy.wrap(chosenDate)
})

Cypress.Commands.add('cover', () => {
    //check start date and choose 
    cy.get(coverPageElements.startDateDropdownTrigger).click()
    cy.get(basicPageElements.notChosenDropDownOption).should('have.length', 29)
    cy.get(basicPageElements.chosenDropdownOption).should('have.length', 1)
    let chosenDate
    cy.calculateChosenDate()
        .then(date => {
            chosenDate = date
            cy.get(basicPageElements.dropdownContainer).contains(chosenDate).click()
        })
    //excess cover with money
    cy.get(coverPageElements.excessCoverDropdownTrigger).click()
    cy.get(basicPageElements.dropdownMenu).find(basicPageElements.dropdownContainer).should(optionsContainer => {
        const actualText = optionsContainer.text();
        excessExpDropdownOpt.forEach(expectedText => {
            expect(actualText).to.include(expectedText)
        })
    })
    cy.get(basicPageElements.dropdownContainer).contains(inputData.voluntaryExcessAmount).click()
    //set payment frequency
    cy.get(coverPageElements.paymentFrequencyButtons).contains(inputData.paymentFrequency.toUpperCase()).click()
    //check renewal quote input
    cy.get(coverPageElements.renewalQuoteInput).should('be.enabled')
})