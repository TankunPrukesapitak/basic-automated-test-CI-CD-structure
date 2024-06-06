import type { Page, Locator } from '@playwright/test';
import { data, locator } from '../testdata/import';


export async function login(page, username: String, password: String) {
  await page.locator(locator.username_textfiled).fill(username);
  await page.locator(locator.password_textfield).fill(password);
  await page.click(locator.submit_login);
}