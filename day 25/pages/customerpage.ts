import { type Page, expect } from '@playwright/test';

export default class CustomerPage {
  constructor(readonly page: Page) {}

  async depositMoney(amount: string) {
    await this.page.getByRole('button', { name: 'Deposit' }).click();
    await this.page.getByPlaceholder('amount').fill(amount);
    await this.page.locator('form').getByRole('button', { name: 'Deposit' }).click();
    await expect(this.page.getByText('Deposit Successful')).toBeVisible();
  }

  async withdrawMoney(amount: string) {
    // Note the spelling 'Withdrawl' to match the website typo
    await this.page.getByRole('button', { name: 'Withdrawl' }).click();
    await this.page.waitForTimeout(500); // Wait for the form to switch
    await this.page.getByPlaceholder('amount').fill(amount);
    await this.page.locator('form').getByRole('button', { name: 'Withdraw' }).click();
    await expect(this.page.getByText('Transaction successful')).toBeVisible();
  }


  async logout() {
    await this.page.getByRole('button', { name: 'Logout' }).click();
  // async logout() {
  //   // 1. Wait for the logout button to actually be visible 
  //   // This ensures the previous transaction is finished.
  //   const logoutBtn = this.page.getByRole('button', { name: 'Logout' });
  //   await expect(logoutBtn).toBeVisible({ timeout: 10000 });
    
  //   // 2. Click it
  //   await logoutBtn.click();
    
  //   // 3. Optional: Verify we are back at the login screen
  //   await expect(this.page.getByRole('button', { name: 'Customer Login' })).toBeVisible();
  }
  }
