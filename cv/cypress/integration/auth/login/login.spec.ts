describe("Login in user", () => {
    it('Should not login if the form is invalid', () => {
        cy.visit('/');
        cy.url().should('includes', 'auth/log-in');
        cy.get('app-input #email').type("teskit@teskit.ru");
        cy.url().should('not.include', 'layout/employee')
    })
    it('Should login if the form is valid', () => {
        cy.login('teskit@teskit.ru', 'testim')
        cy.url().should('include', 'layout/employee')
    })
});