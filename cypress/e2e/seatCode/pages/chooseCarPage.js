class chooseCarPage {
  // Elements from the chooseCarPage page
  elements = {
    acceptCookiesButton: () => cy.get("#onetrust-accept-btn-handler"),
    configurationCodeInput: () => cy.get("form.ng-untouched > .ng-untouched"),

    //Available cars
    carOption1: () => cy.get(":nth-child(1) > seat-car-selector-list-item"),
    carOption2: () => cy.get(":nth-child(3) > seat-car-selector-list-item"),
    carOption3: () => cy.get(":nth-child(5) > seat-car-selector-list-item"),
    carOption4: () => cy.get(":nth-child(7) > seat-car-selector-list-item"),
    carOption5: () => cy.get(":nth-child(9) > seat-car-selector-list-item"),
    carOption6: () => cy.get(":nth-child(11) > seat-car-selector-list-item"),
  };

  // Methods from the chooseCarPage page
  acceptCookies() {
    this.elements.acceptCookiesButton().click();
  }

  typeConfigurationCode(configurationCode) {
    this.elements.configurationCodeInput().type(configurationCode);
  }

  cliclCarOption2() {
    this.elements.carOption2().click();
  }
}

module.exports = new chooseCarPage();
