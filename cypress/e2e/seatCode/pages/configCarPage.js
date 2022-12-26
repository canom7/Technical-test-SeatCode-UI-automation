class configCarPage {
  // Elements
  elements = {
    nextButton: () =>
      cy.get(
        "footer > seat-price-details-small > :nth-child(2) > seat-button > main"
      ),
  };

  // Methods
  clickNext() {
    this.elements.nextButton().click();
  }
}

module.exports = new configCarPage();
