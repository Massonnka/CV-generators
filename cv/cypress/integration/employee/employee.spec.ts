describe("Сheck Employee CV", () => {
    it("Check employee info", () => {
        cy.login('teskit@teskit.ru', 'testim')
        cy.get('app-table tr[ng-reflect-router-link="2"]')
            .click();
    });
    it("Should not edit if the form is invalid", () => {
        cy.wait(2000);
        cy.get('nz-descriptions button span[class="ng-star-inserted"]')
            .eq(0)
            .should("have.text", " Edit ")
            .click();
        cy.clearEmployee();
        cy.editEmployee("Testik", "Testirovich", "teskit@teskit.ru", "testimka", "hh");
        cy.url().should('not.include', 'layout/employee');
    });
    it("Should  edit if the form is valid", () => {
        cy.wait(2000);
        cy.get('nz-descriptions button span[class="ng-star-inserted"]')
            .eq(0)
            .should("have.text", " Edit ")
            .click();
        cy.clearEmployee();
        cy.editEmployee("Testik", "Testirovich", "teskit@teskit.ru", "testimka", "testimka");
        cy.wait(2000);
        cy.url().should('include', 'layout/employee')
    });
});