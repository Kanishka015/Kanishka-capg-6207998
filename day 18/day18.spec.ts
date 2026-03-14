import{test} from '@playwright/test'
import path from 'path'

test("upload file", async({page})=>{
    console.log(__dirname);
    console.log(__filename);
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').setInputFiles("D:/Capg-assignment/tests/uploadfile/demo.txt");
    // await page.getByRole("button" , {name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)

    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname), "../demo.txt")
    
})

