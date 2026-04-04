import { test, expect } from '@playwright/test';

test('Amazon simple end-to-end flow', async ({ page, context }) => {
    
    // 1. Go to Amazon
    await page.goto('https://www.amazon.in/');

    // PAUSE the test here to manually bypass CAPTCHA
    await page.pause(); 

    // 2. Search for the phones
    await page.locator('#twotabsearchtextbox').fill('Phones');
    await page.keyboard.press('Enter');

    // 3. Click the filter for 10 GB RAM 
    await page.getByText('10 GB & Above').click();
    
    // Wait for the results to refresh
    await page.waitForTimeout(3000); 

    // 4. Create the locator for the 4th phone
    const fourthPhoneLocator = page.locator('.a-size-medium.a-text-normal').nth(3);

    // 5. Scroll to the 4th phone so it's visible
    await fourthPhoneLocator.scrollIntoViewIfNeeded();

    // 6. Set up the listener for the new tab
    const newPagePromise = context.waitForEvent('page'); 

    // 7. Click the 4th phone
    await fourthPhoneLocator.click();

    // 8. Catch the new tab and wait for it to load
    const newTab = await newPagePromise;
    await newTab.waitForLoadState('domcontentloaded');

    // 9. Click 'Add to Cart' inside the new tab
    // We use .first() because sometimes Amazon has multiple Add to Cart buttons hidden
   // 9. Click 'Add to Cart' inside the new tab
// We specifically look for the button that is VISIBLE on screen
    await newTab.locator('#add-to-cart-button').filter({ visible: true }).click();
    
    await newTab.waitForTimeout(3000); 
});