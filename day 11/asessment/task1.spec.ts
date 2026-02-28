import { test, expect } from '@playwright/test';

test('Validate Amazon search, item name, and price', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const searchBox = page.locator('xpath=//input[@id="twotabsearchtextbox"]');
  await searchBox.fill('shoes');
  await page.keyboard.press('Enter');

  await page.waitForSelector('xpath=//div[@data-component-type="s-search-result"]');

  const firstItemName = await page.locator('xpath=(//div[@data-component-type="s-search-result"]//h2//span)[1]').innerText();
  const firstItemPrice = await page.locator('xpath=(//div[@data-component-type="s-search-result"]//span[@class="a-price-whole"])[1]').innerText();

  console.log(`Product Name: ${firstItemName}`);
  console.log(`Product Price: ₹${firstItemPrice}`);

  expect(firstItemName).not.toBeNull();
  expect(firstItemPrice).not.toBeNull();
});