describe("Register User", () => {
    it("Should sigup if the form is valid", () => {
        cy.visit("http://localhost:4200/auth/log-in");
        cy.get('#sign-up').should
            ("have.text", " Register now ")
            .click();
        cy.signup("Testik", "Testirovich", "testim", "testim", "teskit@teskit.ru", "Angular")
    });
});
