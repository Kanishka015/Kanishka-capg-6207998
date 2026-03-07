import { test } from "@playright/test";

test("amazon", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator("//input[@placeholder='Search Amazon.in']").fill("laptops");
    await page.locator("//input[@id='nav-search-submit-button']").press("Enter");

    await page.locator('//span')


