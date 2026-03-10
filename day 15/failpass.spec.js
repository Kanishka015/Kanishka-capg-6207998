import{test} from '@playwright/test'

test(known bug , async ({page}) => {
    test.fail()
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('button', {name: 'Fake Button'}).click();
})