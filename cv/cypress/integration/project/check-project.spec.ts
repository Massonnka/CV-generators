describe("Сheck Project", () => {
    it("Check project info", () => {
        cy.visit('/');
        cy.login('teskit@teskit.ru', 'testim')
        cy.get('app-sider li')
            .eq(2)
            .should("have.text", ' Project ')
            .click();
        cy.wait(1000);
        cy.get('app-table tr')
            .eq(1)
            .click();
        cy.projectInfo();
        cy.get('nz-descriptions button').click();
        cy.url().should('include', 'layout/project')
    });
});