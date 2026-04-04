import {test} from '@playwright/test'

test.only("Task 4",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [page2]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    await page.pause();
    
    // await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    // await page.getByPlaceholder('Enter text here').fill("Hello this is a sample text file");
    // await page.getByPlaceholder('Filename').fill("sample.txt");
    // let [download] = await Promise.all([
    //     page.waitForEvent('download'),
    //     page.locator('#downloadButton').click()
    // ])
    // await page.waitForTimeout(5000);
})