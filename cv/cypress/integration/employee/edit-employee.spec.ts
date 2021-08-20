describe("Edit Employee CV", () => {
    it("Check employee info", () => {
        cy.visit('/');
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
        cy.write('app-autocomplete #specialization', "lalalalal");
        cy.write('app-autocomplete #department', "lalalalal");
        cy.url().should('not.include', 'layout/employee/2')
    });
    it("Should  edit if the form is valid", () => {
        cy.wait(2000);
        cy.clearEmployee();
        cy.updateEmployee("Testik", "Testirovich", "teskit@teskit.ru", "testimka", "testimka");
        cy.url().should('include', 'layout/employee')
    });
});