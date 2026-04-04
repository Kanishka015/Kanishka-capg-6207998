import { test } from '@playwright/test';

class Amazon {
    constructor(page, context) {
        this.page = page;
        this.context = context;
    }

    async searchAndFilter(item) {
        await this.page.goto('https://www.amazon.in/');
        await this.page.pause(); // Remove this if no CAPTCHA appears
        
        await this.page.locator('#twotabsearchtextbox').fill(item);
        await this.page.keyboard.press('Enter');
        
        await this.page.getByText('10 GB & Above').click();
        await this.page.waitForTimeout(3000); // Wait for results to load
    }

    async clickPhoneAndGetNewTab(index) {
        const phone = this.page.locator('.a-size-medium.a-text-normal').nth(index);
        await phone.scrollIntoViewIfNeeded();

        // Listen for the new tab, click, and return the new tab
        const newPagePromise = this.context.waitForEvent('page');
        await phone.click();
        
        return await newPagePromise; 
    }
}

// --- The Actual Test ---
test('Amazon simple E2E flow', async ({ page, context }) => {
    
    // 1. Initialize our class
    const amazon = new Amazon(page, context);

    // 2. Run the search and filter methods
    await amazon.searchAndFilter('Phones');

    // 3. Click the 4th phone (index 3) and catch the new tab
    const newTab = await amazon.clickPhoneAndGetNewTab(3);
    await newTab.waitForLoadState('domcontentloaded');

    // 4. Add to cart on the new tab
    await newTab.locator('#add-to-cart-button').filter({ visible: true }).click();
    await newTab.waitForTimeout(3000); 
});