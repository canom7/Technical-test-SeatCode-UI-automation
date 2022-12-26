import chooseCarPage from "../seatCode/pages/chooseCarPage";
import chooseCarModelPage from "../seatCode/pages/chooseCarModelPage";
import configCarPage from "../seatCode/pages/configCarPage";
import summaryPage from "../seatCode/pages/summaryPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("should has the same result when donwloading configuration with X reference ID", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should get summary Page", () => {
    chooseCarPage.acceptCookies();
    chooseCarPage.cliclCarOption2();
    chooseCarModelPage.configureOption1();
    configCarPage.clickNext();
    configCarPage.clickNext();
    configCarPage.clickNext();
    configCarPage.clickNext();

    //Save the confuguration Code, back to configurator page and Enter the code
    cy.get(".configuration-key")
      .invoke("text")
      .then((configCode) => {
        cy.visit("/");
        cy.get("form.ng-untouched > .ng-untouched")
          .type(configCode)
          .type("{enter}");

        //Assert - Configuration Code is the entered one after download
        cy.get(".configuration-key").should("have.text", configCode);
      });

    //Assert - Configuration Page title after download
    summaryPage.elements
      .sumaryTitle()
      .should("have.text", "Mi ARONA X-Perience XS");
  });
});
