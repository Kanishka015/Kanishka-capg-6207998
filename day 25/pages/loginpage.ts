import { type Page } from '@playwright/test';

export default class LoginPage {
  constructor(readonly page: Page) {}

  async navigateToApp() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login', { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
  }

  async clickManagerLogin() {
    await this.page.getByRole('button', { name: 'Bank Manager Login' }).click();
  }

  async clickHomeButton() {
    // Clicks the Home button at the top left to reset the view
    await this.page.getByRole('button', { name: 'Home' }).click();
  }

  async loginAsCustomer(fullName: string) {
    // From your 4th screenshot: Click Customer Login, Select Name, Click Login
    await this.page.getByRole('button', { name: 'Customer Login' }).click();
    await this.page.locator('#userSelect').selectOption({ label: fullName });
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}