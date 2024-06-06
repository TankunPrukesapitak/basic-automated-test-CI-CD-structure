import { data, locator } from '../testdata/import';


export function login(username, password) {
  cy.get(locator.username_textfiled).type(username);
  cy.get(locator.password_textfield).type(password);
  cy.get(locator.submit_login).click();
}