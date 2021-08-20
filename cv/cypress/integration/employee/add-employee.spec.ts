describe("Add Employee CV", () => {
    it("Check employee info", () => {
        cy.visit('/');
        cy.login('teskit@teskit.ru', 'testim')
        cy.get('nz-content button')
            .should('have.text', "Add employee")
            .click();
    });
    it("Should not add if the form is invalid", () => {
        cy.url().should('includes', 'layout/employee/addinfo');
        cy.write('app-input #firstname', "lallalalla");
        cy.write('app-input #lastname', "lalalalal");
        cy.write('app-autocomplete #email', "lalalalal");
        cy.write('app-autocomplete #department', "lalalalal");

    });
    it("Should add if the form is valid", () => {
        cy.clearEmployee();
        cy.updateEmployee("Testik", "Testirovich", "teskit@teskit.ru", "testimka", "testimka");
        cy.url().should('include', 'layout/employee')
    });
});