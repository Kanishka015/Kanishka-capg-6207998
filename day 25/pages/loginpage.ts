import { type Page } from '@playwright/test';

export default class LoginPage {
  constructor(readonly page: Page) {}

  async navigateToApp() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login', { 
      waitUntil: 'domcontentloaded' 
    });
  }

  async clickManagerLogin() {
    await this.page.getByRole('button', { name: 'Bank Manager Login' }).click();
  }


  async clickHomeButton() {
    await this.page.getByRole('button', { name: 'Home' }).click();
  }

  async loginAsCustomer(fullName: string) {
    await this.page.getByRole('button', { name: 'Customer Login' }).click();
    await this.page.locator('#userSelect').selectOption({ label: fullName });
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}