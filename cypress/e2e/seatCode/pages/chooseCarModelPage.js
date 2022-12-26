class chooseCarModelPage {
  // Elements from the chooseCarModelPage page
  elements = {
    //Available models
    configureOption1Button: () =>
      cy.get(":nth-child(2) > .second-column > .seat-button-text > main"),
    configureOption2Button: () =>
      cy.get(":nth-child(4) > .second-column > .seat-button-text > main"),
    configureOption3Button: () =>
      cy.get(":nth-child(6) > .second-column > .seat-button-text > main"),
    configureOption4Button: () =>
      cy.get(":nth-child(8) > .second-column > .seat-button-text > main"),
  };

  // Methods from the chooseCarModelPage page
  configureOption1() {
    this.elements.configureOption1Button().click();
  }
}

module.exports = new chooseCarModelPage();
