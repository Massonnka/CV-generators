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

Cypress.Commands.add('write', (identifer, data) => {
  cy.get(identifer).type(data);
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

function signup(
  firstname: string,
  lastname: string,
  password: string,
  confirmpass: string,
  email: string,
  select: string
): void {
<<<<<<< HEAD
  cy.write('app-input #firstname', firstname);
  cy.write('app-input #lastname', lastname);
  cy.write('app-input #password', password);
  cy.write('app-input #confirmpass', confirmpass);
  cy.write('app-input #email', email);
  cy.get('app-select #type').select(select);
  cy.get('button[type="submit"]').click();
=======
    cy.url().should('includes', 'auth/sign-up');
    cy.write('app-input #firstname', firstname);
    cy.write('app-input #lastname', lastname);
    cy.write('app-input #password', password);
    cy.write('app-input #confirmpass', confirmpass);
    cy.write('app-input #email', email);
    cy.get('app-select #type').select(select);
    cy.get('button[type="submit"]').click();
>>>>>>> 3ced4deb00286cf4bf8dce9a32e8e34d8cac6f6d
}

Cypress.Commands.add('signup', signup);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        updateEmployee(
            firstname: string,
            lastname: string,
            email: string,
            specialization: string,
            department: string,
        ): typeof updateEmployee;
    }
}

function updateEmployee(
    firstname: string,
    lastname: string,
    email: string,
    specialization: string,
    department: string
): void {
    cy.url().should('includes', 'layout/employee/addinfo');
    cy.write('app-input #firstname', firstname);
    cy.write('app-input #lastname', lastname);
    cy.write('app-autocomplete #email', email);
    cy.write('app-autocomplete #specialization', specialization);
    cy.write('app-autocomplete #department', department);
    cy.get('button[type="submit"]').click();
}

Cypress.Commands.add('updateEmployee', updateEmployee);

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

declare namespace Cypress {
    interface Chainable<Subject = any> {
        updateProject(
            name: string,
            startDate: string,
            endDate: string,
            teamSize: number,
            techStack: string,
            roles: string,
            description: string,
            responsibilities: string,
        ): typeof updateProject;
    }
}

function updateProject(
    name: string,
    startDate: string,
    endDate: string,
    teamSize: number,
    techStack: string,
    roles: string,
    description: string,
    responsibilities: string,
): void {
    cy.url().should('includes', 'layout/project/addinfo');
    cy.write('app-input #name', name);
    cy.write('app-date-picker #startDate', startDate);
    cy.write('app-date-picker #endDate', endDate);
    cy.write('app-input #teamSize', teamSize);
    cy.write('app-input #techStack', techStack);
    cy.write('app-autocomplete #roles', roles);
    cy.write('app-textarea[formControlName="description"]', description);
    cy.write('app-textarea[formControlName="responsibilities"]', responsibilities);
    cy.get('button[type="submit"]').click();
}

Cypress.Commands.add('updateProject', updateProject);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        clearProject(): typeof clearProject;
    }
}

function clearProject(): void {
    cy.get('app-input #name').clear();
    cy.get('app-date-picker #endDate').clear();
    cy.get('app-date-picker #endDate').clear();
    cy.get('app-input #teamSize').clear();
    cy.get('app-input #techStack').clear();
    cy.get('app-autocomplete #roles').clear();
    cy.get('app-textarea[formControlName="description"]').clear();
    cy.get('app-textarea[formControlName="responsibilities"]').clear();
}

Cypress.Commands.add('clearProject', clearProject);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        userInfo(): typeof userInfo;
    }
}

function userInfo(): void {
    cy.get('nz-descriptions td').eq(3).should("have.text", "Testik");
    cy.get('nz-descriptions td').eq(4).should("have.text", "Testirovich")
    cy.get('nz-descriptions td').eq(5).should("have.text", "teskit@teskit.ru")
    cy.get('nz-descriptions td').eq(7).should("have.text", "Angular")
}

Cypress.Commands.add('userInfo', userInfo);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        projectInfo(): typeof projectInfo;
    }
}

function projectInfo(): void {
    cy.get('nz-descriptions td').eq(3).should("have.text", " string ");
    cy.get('nz-descriptions td').eq(4).should("have.text", " Tuesday, July 27, 2021 ")
    cy.get('nz-descriptions td').eq(5).should("have.text", " Tuesday, July 27, 2021 ")
    cy.get('nz-descriptions td').eq(9).should("have.text", " 0 ")
    cy.get('nz-descriptions td').eq(10).should("have.text", "Angular")
    cy.get('nz-descriptions td').eq(11).should("have.text", "React");
    cy.get('nz-descriptions td').eq(14).should("have.text", "blalbalblalblalbalblalbalblalbalbl ");
    cy.get('nz-descriptions td').eq(15).should("have.text", "blablalblablalblalbblalbalbaxa ");
}

Cypress.Commands.add('projectInfo', projectInfo);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        employeeInfo(): typeof employeeInfo;
    }
}

function employeeInfo(): void {
    cy.get('nz-descriptions td').eq(3).should("have.text", "Testik ");
    cy.get('nz-descriptions td').eq(4).should("have.text", "Testirovich")
    cy.get('nz-descriptions td').eq(5).should("have.text", "teskit@teskit.ru")
    cy.get('nz-descriptions td').eq(8).should("have.text", "testimka ")
    cy.get('nz-descriptions td').eq(9).should("have.text", "testimka")
}

Cypress.Commands.add('employeeInfo', employeeInfo);
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
