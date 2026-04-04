import { test, expect, type Page } from '@playwright/test';

// --- OOP Class Definition ---
class FlipkartShoppingFlow {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openAndDismissLogin() {
    await this.page.goto('https://www.flipkart.com');
    const closeBtn = this.page.locator('span:has-text("✕"), span:has-text("X")').first();
    try {
      await closeBtn.waitFor({ state: 'visible', timeout: 5000 });
      await closeBtn.click();
    } catch (e) { 
      // Proceed if no popup appears
    }
  }

  async navigateToFestiveGudiStore() {
    await this.page.getByText('Home', { exact: true }).first().click();

    // Scroll down generically to force the banners to lazy-load
    await this.page.mouse.wheel(0, 800);
    await this.page.waitForTimeout(500); 

    // Locate the Gudi Padwa Store image using its unique src URL
    const gudiPadwaImage = this.page.locator('img[src*="88e557198b04f01c"]').first();
    await gudiPadwaImage.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500); 
    await gudiPadwaImage.click();

    await this.page.mouse.wheel(0, 600);
    await this.page.waitForTimeout(500); 
  }

  async scrollToAndSelectGudiCloth() {
    // Locate the Gudi Cloth image using its unique src URL
    const gudiClothImage = this.page.locator('img[src*="f63af45677b331e7"]').first();
    await gudiClothImage.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500); 
    await gudiClothImage.click();
  }

  async addTwoItems() {
    await this.page.waitForSelector('a[target="_blank"]', { timeout: 10000 });

    for (let i = 0; i < 2; i++) {
      const newPagePromise = this.page.context().waitForEvent('page');
      
      // Select product (skipping the first one as it's often an ad)
      await this.page.locator('a[target="_blank"]').nth(i + 1).click();
      
      const newTab = await newPagePromise;
      await newTab.waitForLoadState();

      // Click Add to Cart
      const addToCartBtn = newTab.locator('button', { hasText: /Add to cart/i });
      await addToCartBtn.click();
      await newTab.close();
    }
  }

  async increaseCartQuantities() {
    // Go to the cart explicitly
    await this.page.goto('https://www.flipkart.com/viewcart');

    // Wait for the '+' buttons to appear in the cart
    const plusButtons = this.page.locator('button:has-text("+")');
    await plusButtons.first().waitFor({ state: 'visible', timeout: 10000 });

    const count = await plusButtons.count();

    // Loop through however many items we have in the cart
    for (let i = 0; i < count; i++) {
      // We always click the first one in the list because Playwright handles dynamic lists
      await plusButtons.nth(i).click();
      
      // ⚠️ IMPORTANT: Wait for the cart to process the quantity update 
      // Flipkart shows a quick loading spinner/disables buttons when quantities change
      await this.page.waitForTimeout(2000); 
    }
  }

  async proceedToCheckout() {
    const placeOrderBtn = this.page.locator('button', { hasText: /Place Order/i }).first();
    await placeOrderBtn.scrollIntoViewIfNeeded();
    await placeOrderBtn.click();

    // Verify we reached the Login/Checkout prompt step
    // (Flipkart asks for mobile number/login immediately after hitting Place Order)
    const loginOrEmailPrompt = this.page.getByText(/Enter Email\/Mobile number/i);
    await expect(loginOrEmailPrompt).toBeVisible({ timeout: 10000 });
  }
}

// --- Test Execution ---
test('Flipkart Flow: Add items -> Increase Quantities -> Checkout', async ({ page }) => {
  const flipkart = new FlipkartShoppingFlow(page);

  // 1. Navigation & adding to cart
  await flipkart.openAndDismissLogin();
  await flipkart.navigateToFestiveGudiStore(); 
  await flipkart.scrollToAndSelectGudiCloth();
  await flipkart.addTwoItems();

  // 2. Cart Manipulation
  await flipkart.increaseCartQuantities();

  // 3. Checkout
  await flipkart.proceedToCheckout();
});