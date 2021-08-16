describe("Log Out user", () => {
    it("Check log out button", () => {
        cy.login('teskit@teskit.ru', 'testim');
        cy.wait(2000);
        cy.get('li a').should("have.text", "Log out").click();
        cy.url().should('include', 'auth/log-in');
    });
});