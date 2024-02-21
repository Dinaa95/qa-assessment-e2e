export const basicPageElements = {
  pageTitle: 'Car | By Miles',
  cookieRevisitButton: '.cky-btn-revisit-wrapper',
  notChosenDropDownOption: '.css-1x7e2kq-option',
  chosenDropdownOption: '.css-86fhue-option',
  dropdownMenu: 'div.css-1r5hf38-menu',
  dropdownContainer: 'div.css-11unzgr',
};

export const cookiePopupTexts = {
  cookieText: 'We use cookies. Here’s why.',
  customCookieText: 'Choose your cookies.',
}

export const cookiePopupElements = {
  //cookie base
  mainCookiePopup: '.cky-consent-bar',
  mainCookieText: '.cky-title',
  allowAllButton: '.cky-notice-btn-wrapper > .cky-btn-accept',
  rejectAllButton: '.cky-notice-btn-wrapper > .cky-btn-reject',
  //customized cookies
  customizeButton: '.cky-btn-customize',
  customCookiePopup: '.cky-preference-center',
  customCookieText: '.cky-preference-title',
  savePreferencesButton: '.cky-btn-preferences',
  //checkboxes
  functionalSwitch: '#ckySwitchfunctional',
  performanceSwitch: '#ckySwitchperformance',
  advertisementSwitch: '#ckySwitchadvertisement',
  analyticsSwitch: '#ckySwitchanalytics',
  otherSwitch: '#ckySwitchother',
};

export const addPlatePageElements = {
  carContainer: '.car-wrapper',
  carRegNumberText: 'Enter your registration number.',
  regNumberField: '#reg',
  findCarButton: '[data-cy="find-car-button"]',
  infoButton: '.info_icon',
  infoPopup: '[type="info"]',
}

export const carExpectedDropdownOptions = [
  'Policyholder (me)', 'Spouse', 'Civil partner', 'Common-law partner',
  'Leased to one of the above', 'A parent or guardian', 'Other'
]

export const carPageElements = {
  //car data
  carGeneralContainer: '[data-cy="car-info-container"]',
  carName: '.car-name',
  plateNumberDiv: 'car-view-section car-reg is-tablet',
  choosenButtonTextColour: 'rgb(255, 255, 255)',
  //modification container
  modificationContainer: '#hasModifications',
  modificationButtons: '[data-cy="has-modifications-toggle"]',
  modificationCards: '.option-card',
  modificationNotListed: '.not-listed',
  //history contanier
  historyContainer: '.sc-hZFzCs cAxUep',
  //purchase date
  confirmPurchaseDateContainer: '#confirmPurchaseDate',
  dateConfirmButtons: '[data-cy="purchase-date-toggle"]',
  addCustomPurchaseDate: '#customPurchaseDate',
  //general dropdown elements
  dropdownMenu: 'div.css-1r5hf38-menu',
  dropdownContainer: 'div.css-11unzgr',
  //dropdownOptions: 'div.css-1x7e2kq-option',
  //legal owner
  legalOwnerContainer: '#legalOwner',
  legalOwnerDropdownTrigger: '[data-cy="car-owner-dropdown-list"]',
  ownerPolicyHolderOption: '#react-select-2-option-0',
  //registered keeper
  keeperContainer: '#keeper',
  keeperDropdownTrigger: '[data-cy="car-keeper-dropdown-list"',
  keeperPolicyHolderOption: '#react-select-3-option-0',
  //park at home option
  parkAtHomeButtons: '[data-cy="is-parked-home-toggle"]',
  addPostcode: '[data-cy="parked-location-postcode-input-text-field"]',
  //mileage container
  estimatedMileageInput: '#estimated-mileage',
  //continue
  continueButton: '[data-cy="continue-driver-button"]',
}

export const nameExpectedDropdownOptions = [
  'Mr', 'Mrs', 'Miss', 'Ms', 'Mx', 'Dr'
]

export const employmentExpDropdownOpt = [
  'Employed', 'Homemaker', 'Independent means', 'Retired', 'Self employed',
  'In full or part-time education', 'Not employed at the moment'
]

export const licenceTypeExpDropdownOpt = [
  'Full EU Licence', 'Full European (Non-EU)', 'Full International Licence',
  'Full UK Car Licence', 'Medical Restricted (Full) Less Than 3 Years - Car',
  'Provisional (UK) Car Licence', 'Provisional EU Licence', 'Other'
]

export const incidentTypeExpDropdownOpt = [
  'Accident', 'Misfuelling', 'Weather Damage', 'Fire',
  'Theft or Attempted Theft', 'Vandalism', 'Windscreen', 'Other'
]

export const driverPageElements = {
  //general dropdown elements
  dropdownMenu: 'div.css-1r5hf38-menu',
  dropdownContainer: 'div.css-11unzgr',
  //dropdownOptions: 'div.css-1x7e2kq-option',
  //title dropdown
  nameTitleDropdownTrigger: '[data-cy="title-dropdown-list"]',
  mrsTitleOption: '#react-select-5-option-1',
  //name inputs
  firstNameInput: '#first-name',
  lastNameInput: '#last-name',
  //birthday inputs
  dayOfBirthInput: '#day',
  monthOfBirthInput: '#month',
  yearOfBirthInput: '#year',
  //live in the UK
  liveInTheUkButtons: '[data-cy="uk-born-toggle"]',
  spentInTheUkContainer: '#residencyDate',
  //kids under 16
  haveKidsDropdownTrigger: '[data-cy="children-under-16-dropdown-list"]',
  oneKidOption: '#react-select-2-option-1',
  //address
  postcodeInput: '#find-address',
  findAddressButton: '[data-cy="home-address-find-address-button"]',
  addressDropdownTrigger: '[data-cy="home-address-dropdown-list"]',
  addressContainer: '.address-text-container',
  editAddressButton: '[data-cy="edit-address-button"]',
  //email
  emailInput: '#email',
  //mobile number
  mobileInput: '#mobile-number',
  //contacgt with marketing offers
  offerContactByEmailSwitch: '[data-cy="marketing-email-toggle"]',
  offerContactByPostSwitch: '[data-cy="marketing-post-toggle"]',
  offerContactByPhoneSwitch: '[data-cy="marketing-phone-toggle"]',
  //employment elements
  employmentDropdownTrigger: '[data-cy="employment-status-dropdown-list"]',
  selfEmployedIndustryInput: '[placeholder="Business category"]',
  selfEmployedOccupationInput: '[placeholder="Occupation"]',
  //driving licence details
  licenceTypeDropdownTrigger: '[data-cy="licence-type-dropdown-list"]',
  licenceAgeDropdownTrigger: '[data-cy="licence-date-dropdown-list"]',
  licenceNoClaimDiscountTrigger: '[data-cy="ncd-date-dropdown-list"]',
  //medical condition
  medicalConditionButtons: '[data-cy="has-medical-conditions-toggle"]',
  medicalConditionIsKnownButtons: '[data-cy="has-informed-dvla-medical-conditions-toggle"]',
  //accident and claims
  incidentButtons: '[data-cy="has-claims-toggle"]',
  //incident form
  formTitle: '.modal-title',
  incidentTypeDropDownTrigger: '[data-cy="incident-type-dropdown-list"]',
  incidentDateError: '.split-date-error',
  incidentMonthInput: '[data-cy="incident-date-text-field-month"]#month',
  incidentYearInput: '[data-cy="incident-date-text-field-year"]#year',
  myFaultButtons: '[data-cy="incident-at-fault-toggle"]',
  loseNoClaimsDiscountButtons: '[data-cy="lose-no-claims-toggle"]',
  addIncidentButton: '[data-cy="add-incident-button"]',
  //added incident
  generalAddedBox: '.attribute-box',
  //conviction
  motoringConvictionButtons: '[data-cy="has-motoring-convictions-toggle"]',
  formOverlay: '.overlay-wrapper',
  formCancelButton: '.button-cancel',
  choosenButtonTextColour: 'rgb(255, 255, 255)',
  anyConvictionButtons: '[data-cy="has-criminal-convictions-toggle"]',
  //add driver
  addDriverButton: '[data-cy="add-additional-driver-button"]',
  addDriverFormTitle: 'Add additional driver.',
  addDriverAgreeCheckbox: '[data-cy="additional-driver-consent-checkbox"]',
  confirmAddDriverButton: '[data-cy="confirm-additional-driver-consent"]',
  addMoreDriversInfoText: '.add-driver-info',
  countOfDriversCanBeAddedText: 'You can add 2 more drivers to your policy.',
  //delete driver
  removeNewDriverButton: '[data-cy="additional-driver-1-remove-button"]',
  confirmRemoveNewDriverButtons: '[data-cy="confirm-remove-additional-driver"]',
  confirmRemoveButtonText: 'Remove driver',
  continueButton: '[data-cy="continue-cover-button"]',
}

export const excessExpDropdownOpt = [
  '£0', '£50', '£100', '£150', '£200', '£250', '£300', '£350', '£400',
  '£450', '£500', '£600', '£700', '£800', '£900', '£1000'
]

export const coverPageElements = {
  //cover start date
  startDateDropdownTrigger: '[data-cy="inception-date-dropdown-list"]',
  //excess cover with money
  excessCoverDropdownTrigger: '[data-cy="voluntary-excess-dropdown-list"]',
  //payment frequency
  paymentFrequencyButtons: '[data-cy="payment-frequency-toggle"]',
  //renewal quote
  renewalQuoteInput: '#renewal-quote',
  //get quote
  getQuoteButton: '[data-cy="confirm-cover-details"]',
}