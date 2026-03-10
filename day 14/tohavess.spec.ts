import{test ,expect} from "@playwright/test"

test('asserstions' , async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await expect(page).toHaveScreenshot('image.png');

})