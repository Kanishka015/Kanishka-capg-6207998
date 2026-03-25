import { type Page } from '@playwright/test';

export default class ManagerPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createNewCustomer(firstName: string, lastName: string, postCode: string) {
    // Click the tab
    await this.page.getByRole('button', { name: 'Add Customer' }).click();
    
    // Fill the form using placeholders
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Post Code').fill(postCode);

    // Accept the browser alert ("Customer added successfully")
    this.page.once('dialog', dialog => dialog.accept());
    
    // Click the submit button inside the form
    await this.page.locator('form').getByRole('button', { name: 'Add Customer' }).click();
  }

  async openAccountForCustomer(fullName: string, currency: string) {
    // Click the tab (matches your third screenshot)
    await this.page.getByRole('button', { name: 'Open Account' }).click();
    
    // Select from dropdowns
    await this.page.locator('#userSelect').selectOption({ label: fullName });
    await this.page.locator('#currency').selectOption({ label: currency });

    // Accept the browser alert ("Account created successfully")
    this.page.once('dialog', dialog => dialog.accept());
    
    // Click Process
    await this.page.getByRole('button', { name: 'Process' }).click();
  }
}