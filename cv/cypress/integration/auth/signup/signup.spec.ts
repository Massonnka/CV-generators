describe("Register User", () => {
    it("Should sigup if the form is valid", () => {
        cy.visit("/");
        cy.get('#sign-up').should
            ("have.text", " Register now ")
            .click();
        cy.signup("Testik", "Testirovich", "testim", "testim", "teskit@teskit.ru", "Angular")
        cy.url().should('include', 'auth/log-in');
    });
});
