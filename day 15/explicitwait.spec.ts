import { test } from '@playwright/test'

test(" ", async ({browser}) => {
    let content = await browser.newContext()
    let page = await isContext.newPage()
    await page.goto("https://www.flipkart.in/")
    await page.getByPlaceholder("Search for products , brands, and more")
    await 
    let [page2] =await Promise.all([page.waitForNavigation(), 
        page.locator('//img[@class=""]').first()click()])

        console.log(await page.url());
        console.log(await page2.url());
    // await page.getByTestId("cu7xnq-8ozqj1-i9jh7k-2hem8i").waitFor({timeout:20000, state:"visible"})
    
})