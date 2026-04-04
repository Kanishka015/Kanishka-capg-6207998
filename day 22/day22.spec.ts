import { test } from '@playwright/test';

test('Pro Kabaddi Final Match Scraper', async ({ page }) => {
  await page.goto('https://www.prokabaddi.com/');
  await page.locator("//div[text()='Recent']").click();
  await page.waitForTimeout(1000);
  console.log(await page.locator("//div[contains(@class, 'element-wrap') and .//div[text()='Final']]").first().innerText());

});