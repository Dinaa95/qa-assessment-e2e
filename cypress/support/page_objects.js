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
  //modification container
  modificationContainer: '#hasModifications',
  //history contanier
  historyContainer: '.sc-hZFzCs cAxUep',
  confirmPurchaseDateContainer: '#confirmPurchaseDate',
  legalOwnerContainer: '#legalOwner',
  keeperContainer: '#keeper',
  parkAtHomeContainer: '#parkedAtHome',
  //mileage container
  estimatedMileageInput: '[data-cy="car-mileage-input-text-field"]',
  //continue
  continueButton: '[data-cy="continue-driver-button"]',


}