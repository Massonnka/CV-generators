// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
    interface Chainable<Subject = any> {
        write(identifer: any, data: any): typeof login;
    }
}

Cypress.Commands.add("write", (identifer, data) => {
    cy.get(identifer).type(data)
});

declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(email: string, password: string): typeof login;
    }
}

function login(email: string, password: string): void {
    cy.visit('/');
    cy.url().should('includes', 'auth/log-in');
    cy.write('app-input #email', email);
    cy.write('app-input #password', password);
    cy.get('button[type="submit"]').click();
}

Cypress.Commands.add('login', login);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        signup(
            firstname: string,
            lastname: string,
            password: string,
            confirmpass: string,
            email: string,
            select: string
        ): typeof signup;
    }
}

function signup(firstname: string,
    lastname: string,
    password: string,
    confirmpass: string,
    email: string,
    select: string
): void {
    cy.write('app-input #firstname', firstname);
    cy.write('app-input #lastname', lastname);
    cy.write('app-input #password', password);
    cy.write('app-input #confirmpass', confirmpass);
    cy.write('app-input #email', email);
    cy.get('app-select #type').select(select);
    cy.get('button[type="submit"]').click();
}

Cypress.Commands.add('signup', signup);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        editEmployee(
            firstname: string,
            lastname: string,
            email: string,
            specialization: string,
            department: string,
        ): typeof editEmployee;
    }
}

function editEmployee(
    firstname: string,
    lastname: string,
    email: string,
    specialization: string,
    department: string
): void {
    cy.write('app-input #firstname', firstname);
    cy.write('app-input #lastname', lastname);
    cy.write('app-autocomplete #email', email);
    cy.write('app-autocomplete #specialization', specialization);
    cy.write('app-autocomplete #department', department);
    cy.get('button[type="submit"]').click();
}

Cypress.Commands.add('editEmployee', editEmployee);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        clearEmployee(): typeof clearEmployee;
    }
}

function clearEmployee(): void {
    cy.get('app-input #firstname').clear();
    cy.get('app-input #lastname').clear();
    cy.get('app-autocomplete #email').clear();
    cy.get('app-autocomplete #specialization').clear();
    cy.get('app-autocomplete #department').clear();
}

Cypress.Commands.add('clearEmployee', clearEmployee);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
