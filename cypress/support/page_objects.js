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
  confirmPurchaseDateContainer: '#confirmPurchaseDate',
  dateConfirmButtons: '[data-cy="purchase-date-toggle"]',
  addCustomPurchaseDate:'#customPurchaseDate',
  legalOwnerContainer: '#legalOwner',
  legalOwnerDropdownTrigger: '[data-cy="car-owner-dropdown-list"]',
  legalOwnerDropdownOptions: '#react-select-2-option',
//  legalOwnerDropdownMenu: '.css-1r5hf38-menu',
  keeperContainer: '#keeper',
  parkAtHomeContainer: '#parkedAtHome',
  //mileage container
  estimatedMileageInput: '[data-cy="car-mileage-input-text-field"]',
  //continue
  continueButton: '[data-cy="continue-driver-button"]',


}