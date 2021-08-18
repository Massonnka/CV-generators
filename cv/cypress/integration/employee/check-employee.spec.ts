describe("Сheck Employee CV", () => {
    it("Check employee info", () => {
        cy.visit('/');
        cy.login('teskit@teskit.ru', 'testim')
        cy.wait(2000);
        cy.get('app-table tr[ng-reflect-router-link="2"]')
            .click();
        cy.get('td').eq(3).should('have.text', "Testik ")
        cy.employeeInfo();
        cy.wait(2000);
        cy.get('nz-descriptions button span[class="ng-star-inserted"]')
            .eq(2)
            .should("have.text", " Cancel ")
            .click();
        cy.url().should('include', 'layout/employee')
    });
});