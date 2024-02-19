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

export const carPageElements = {
  carApplet: '.car-wrapper',
  carRegNumberText: 'Enter your registration number.',
  RegNumberField: '#reg',
  findCarButton: '[data-cy="find-car-button"]',
  infoPopup: '[type="info"]',
}