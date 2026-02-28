import {test} from '@playwright/test'


test("title", async({browser, browserName})=>{
    // console.log("hii");
    let context = await browser.newContext() //new context
    let page = await browser.newPage()
    let page2 = await browser.newPage()


    await page.goto("https://www.amazon.in/") //goto
    await page.locator('input#twotabsearchtextbox').type("shoes") //type
    console.log(browserName)
    await page2.goto("https://www.flipkart.in/") 
    await page.goto
    console.log(await page.title()) //title
    
})



//! fixtures ---> it is a setup blok of ccode which is reusable and can be used in multiple test cases

/**
 * pages
 * browser name
 * 
 */