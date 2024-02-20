export const basicPageElements = {
  pageTitle: 'Car | By Miles',
  cookieRevisitButton: '.cky-btn-revisit-wrapper',
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
  'Policyholder (me)', 'Spouse', 'Civil partner', 'Common-law partner', 'Leased to one of the above', 'A parent or guardian', 'Other'
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
  dropdownOptions: 'div.css-1x7e2kq-option',
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
  'Mr', 'Mrs', 'Miss', 'Ms', 'Mx', 'Dr',
]

export const driverPageElements = {
  //general dropdown elements
  dropdownMenu: 'div.css-1r5hf38-menu',
  dropdownContainer: 'div.css-11unzgr',
  dropdownOptions: 'div.css-1x7e2kq-option',
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
  //postcode
  postcodeInput: '[data-cy="home-address-postcode-input-field"]',
  findAddressButton: '[data-cy="home-address-find-address-button"]',
}