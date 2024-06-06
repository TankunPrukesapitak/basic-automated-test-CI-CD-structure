import { test, expect } from '@playwright/test';
import { data, locator, authentication} from '../testdata/import';


test.describe('cookie to Json', () => {
  test('Cokkie to Json', async ({ page }) => {
    await page.goto(`${data.BaseURL}${data.login_path}`);
    await authentication.login(page, data.valid_username, data.valid_password);
    await page.waitForURL(`${data.BaseURL}${data.expect_login_path}`, {timeout:10000});
    const authFile = 'playwright/.auth/user.json';
    await page.context().storageState({ path: authFile });
  });
});

test.describe('skip login', () => {
    test.use({ storageState: 'playwright/.auth/user.json' });
    test('TC_L_2 Verify that the user is not able to log in if the username is incorrect.', async ({ page }) => {
        await page.goto(`${data.BaseURL}${data.expect_login_path}`);
        await page.waitForURL(`${data.BaseURL}${data.expect_login_path}`, {timeout:10000});
    });
});
