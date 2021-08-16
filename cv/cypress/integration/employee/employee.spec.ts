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
        cy.url().should('includes', 'layout/employee/addinfo');
        cy.clearEmployee();
        cy.write('app-input #firstname', "lallalalla");
        cy.write('app-input #lastname', "lalalalal");
        cy.write('app-autocomplete #email', "lalalalal");
        cy.write('app-autocomplete #department', "lalalalal");
        cy.url().should('not.include', 'layout/employee');
    });
    it("Should  edit if the form is valid", () => {
        cy.wait(2000);
        cy.clearEmployee();
        cy.editEmployee("Testik", "Testirovich", "teskit@teskit.ru", "testimka", "testimka");
        cy.wait(2000);
        cy.url().should('include', 'layout/employee/addinfo')
    });
});