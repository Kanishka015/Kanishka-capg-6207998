import { test, expect } from '@playwright/test';

test('QSpiders Login Actions', async ({ page }) => {
  page.setDefaultTimeout(20000);

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByRole('link', { name: 'Login Now' }).click();

  await expect(page.getByPlaceholder('Enter your Email')).toBeVisible();
  await expect(page.getByPlaceholder('Enter your password')).toBeEmpty();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

  await page.getByPlaceholder('Enter your Email').fill('student@qspiders.com');
  await page.getByPlaceholder('Enter your password').fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();
});