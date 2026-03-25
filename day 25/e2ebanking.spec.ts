import { test } from '@playwright/test';
import LoginPage from '../day 25/pages/loginpage';
import ManagerPage from '../day 25/pages/managerpage';
import testData from '../testdata/testdata.json';
import CustomerPage from '../day 25/pages/customerpage';

test.describe('XYZ Bank - Manager Flow Only', () => {
  
  test('Login, Create Customer, and Open Account', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const customerpage = new CustomerPage(page);
    const managerPage = new ManagerPage(page);

    const { firstName, lastName, postCode } = testData.customer;
    const { currency } = testData.account;
    const fullName = `${firstName} ${lastName}`; 

    await test.step('Navigate and Login as Manager', async () => {
    
      await loginPage.navigateToApp();
      await loginPage.clickManagerLogin();
    });

    await test.step('Create a new customer', async () => {
      await managerPage.createNewCustomer(firstName, lastName, postCode);
    });

    await test.step('Open an account for the customer', async () => {
      await managerPage.openAccountForCustomer(fullName, currency);
    });
    await test.step('Switch roles and Login as Customer', async () => {
      
      await loginPage.clickHomeButton(); 
      
      await loginPage.loginAsCustomer(fullName); 
    });

    await test.step('Perform transactions and Validate Balance', async () => {
     
      const { depositAmount, expectedBalance } = testData.transactions;
      await customerpage.depositMoney(depositAmount);
      
      await customerpage.logout();
    });
    
  });
});