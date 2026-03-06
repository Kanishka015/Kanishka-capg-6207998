import { test, expect } from '@playwright/test';

test('Locate and check Android 12.0 filter', async ({ page }) => {
  await page.goto('https://www.flipkart.com/search?q=phones&marketplace=FLIPKART&as-show=on');

  // Locate the checkbox using the text label as an anchor
  const android12Checkbox = page.locator('xpath=//div[text()="Android 12.0"]/preceding-sibling::div');

  // Scroll into view and click
  await android12Checkbox.scrollIntoViewIfNeeded();
  await android12Checkbox.click();

  // Verify selection
  await expect(android12Checkbox).toBeVisible();
});