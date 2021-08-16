describe("Find Employee CV", () => {
    it("Check employee info", () => {
        cy.visit('/');
        cy.login('teskit@teskit.ru', 'testim')
        cy.wait(2000);
        cy.write("nz-content input", "Devon");
        cy.get('app-table tr td')
            .eq(0)
            .should("have.text", "Devon")
            .wait(1000)
            .click();
        cy.url().should('include', 'layout/employee/9')
    });
});