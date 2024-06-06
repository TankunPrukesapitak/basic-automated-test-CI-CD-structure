import { test, expect } from '@playwright/test';
import { data, locator, authentication} from '../testdata/import';


test.describe('Login tesst', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${data.BaseURL}${data.login_path}`);
  });

  test('TC_L_1 Verify that the user is able to log in successfully if the username and password are correct.', async ({ page }) => {
    await authentication.login(page, data.valid_username, data.valid_password);
    await page.waitForURL(`${data.BaseURL}${data.expect_login_path}`, {timeout:10000});
  });

  test('TC_L_2 Verify that the user is not able to log in if the username is incorrect.', async ({ page }) => {
    await authentication.login(page, data.invalid_username, data.valid_password);
    await page.waitForSelector(`text=${data.errorMessage_login}`, {timeout:10000})
  });
});
