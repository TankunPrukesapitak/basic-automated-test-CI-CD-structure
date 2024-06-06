import { data, locator, authentication} from '../testdata/import';


describe('location imformation part booking', () => { 
    beforeEach(() => {
        cy.visit(`${data.BaseURL}${data.login_path}`);
    });
    it('TC_L_1 Verify that the user is able to log in successfully if the username and password are correct.', () => {
      authentication.login(data.valid_username, data.valid_password);
      cy.url({ timeout : 15000}).should('eq', `${data.BaseURL}${data.expect_login_path}`);
    });

    it('TC_L_2 Verify that the user is not able to log in if the username is incorrect.', () => {
      authentication.login(data.invalid_username, data.valid_password);
      cy.contains(data.errorMessage_login).should('be.visible');
    });
});