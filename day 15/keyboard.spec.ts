import { test, expect } from '@playwright/test';

test('Basic Keyboard Actions Demo', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

  await page.getByPlaceholder('Enter your name').focus();
  await page.keyboard.type('Kanishka');

  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');

  await page.keyboard.down('Control');
  await page.keyboard.press('C');
  await page.keyboard.up('Control');

  await page.keyboard.press('Tab');
  await page.keyboard.insertText('student@jecrc.com');

  await page.keyboard.press('Tab');

  await page.keyboard.down('Control');
  await page.keyboard.press('V');
  await page.keyboard.up('Control');

  await page.keyboard.press('Enter');
});