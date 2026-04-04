import {test} from "@playwright/test";

test("web element", async ({page}) => {
        // await page.goto("https://www.practicetestautomation.com/practice-test-login/")
        // await page.getByLabel("Username" , {exact:true}).type("student")
        // await page.getByLabel("Username" , {exact:true}).fill("student1")
        // await page.getByLabel("Password").fill("Password123")
        // await page.getByLabel("Password").fill("password12345")
        // await 
        await page.goto("https://www.amazon.in/")
        await page.locator("input#twotabsearchtxtbox").fill("shoes")
        await page.keyboard.press("Enter")
        let ele=await page.locator("//h2[@class='a-size-large product-title-word-break']/span")
})