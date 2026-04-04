import {test} from '@playwright/test'

test("custom waits", async({page})=> {

    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{

    })

    await page.title(

        
    )
})