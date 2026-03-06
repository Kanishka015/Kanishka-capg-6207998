import { test, expect } from '@playwright/test';

  test("Amazon - Filter by Android 12.0", async ({ page, browserName }) => {
  // Locate the checkbox using the text label as an anchor
  await page.locator('aria-label="Remove the filter Android 12.0 to expand results"');
    await page.locator('')
    await page.screenshot({ path: `amazon-${browserName}.png`, fullPage: true });

});