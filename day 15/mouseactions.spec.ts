import {test} from '@playwright/test'

test(" ", async({page}) =>{

    // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.locator('//input[@type="checkbox"]').click()
    await page.locator('//input[@type="checkbox"]').click()
    await page.waitForTimeout(3000)

    await page.mouse.move(100,100)

    // await page.locator("#btn_a").click({button:"right", clickCount:2, force:true})
    // await page.locator("#btn_a").dblclick();
    // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer"]').hover()

    // await page.locator('#btn_a').hover()
    // await page.mouse.down()
    // await page.mouse.up()
    // await page.locator("#submit").dispatchEvent("click")
    // await page.locator()

   
})

