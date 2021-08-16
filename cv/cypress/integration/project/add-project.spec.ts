describe("Add Project", () => {
    it("Check project info", () => {
        cy.visit('/');
        cy.login('teskit@teskit.ru', 'testim')
        cy.get('app-sider li')
            .eq(2)
            .should("have.text", ' Project ')
            .click();
        cy.get('nz-content button')
            .should('have.text', "Add project")
            .click();
    });
    it("Should not add if the form is invalid", () => {
        cy.url().should('includes', 'layout/project/addinfo');
        cy.write('app-input #name', "lallalalla");
        cy.write('app-input #techStack', "lalalalal");
        cy.write('app-autocomplete #roles', "lalalalal");
        cy.write('app-textarea[formControlName="description"]', "lalalalal");
        cy.url().should('not.include', 'layout/project');
    });
    it("Should add if the form is valid", () => {
        cy.clearProject();
        cy.updateProject("ProjectTest", "2002-11-22", "2002-12-22", 0, "Angular,React", "Header", "blaablalblablablablabla", "bblalblablalblablalbal");
        cy.url().should('include', 'layout/project')
    });
});