describe("Сheck User Info", () => {
    it("Check user name", () => {
        cy.login('teskit@teskit.ru', 'testim')
        cy.get('div[class="user"]').click();
        cy.get('nz-modal-container button span[class="ng-star-inserted"]')
            .eq(1).
            should("have.text", " OK ")
            .click();
    });
});