class summaryPages {
  //Elements
  elements = {
    sumaryTitle: () => cy.get(".left-right > .title"),
    configurationSpan: () =>
      cy.get(".configuration-info > .title > :nth-child(1)"),
  };
}

module.exports = new summaryPages();
