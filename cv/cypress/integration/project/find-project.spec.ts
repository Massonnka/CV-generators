describe("Find Employee CV", () => {
    it("Check employee info", () => {
        cy.visit('/');
        cy.login('teskit@teskit.ru', 'testim')
        cy.get('app-sider li')
            .eq(2)
            .should("have.text", ' Project ')
            .click();
        cy.wait(1000);
        cy.write("nz-content input", "string");
        cy.get('app-table tr td')
            .eq(0)
            .should("have.text", "string")
            .wait(1000)
            .click();
        cy.url().should('include', 'layout/project/60ffb0d0a1bb3c055069b8e6')
    });
});