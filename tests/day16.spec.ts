//! standard
import {test,expect} from '@playwright/test'
//  test('standard-dropdown', async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     await page.locator('#country_code').selectOption({value:'+14'})
//     await expect(page.locator('#country_code')).toHaveValue('+14')
//     //await page.locator('#country_code').selectOption({label:'+14'})
//  })

//  //! multi
//   test('multi-select', async({page})=>{s
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//     await page.locator('#select-multiple-native').selectOption([{value:"Pierced Owl Rose Gold Plated Stainless Steel Double"},{value:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"},{value:"MBJ Women's Solid Short Sleeve Boat Neck V "}])
//     await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
//    })

// //! custom
//  test('custom-select', async({page})=>{
//     await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
  
//     await page.locator('//span[@class="myntraweb-sprite sort-downArrow sprites-downArrow "]').click({force:true})
//     await page.waitForTimeout(3000)
//     let opt= await page.locator('//label[@class="sort-label "]').all()
//     for(let i of opt){
//       let text= await i.textContent()
//       console.log(text);
//       if(text.includes("What'")){
//          await i.click()
//          break;
//       }
   
//     }

//    })

//! Using browser fixture instead of page fixture : multiple tabs

test("multiple tabs", async({browser})=>{
   let context=await browser.newContext()
   let page = await context.newPage(); 
   await page.goto("https://flipkart.com/");
   await page.locator('')
   await page.locator('')
   await page.getByPlaceholder('searh for more products, brands, and more').first().fill("shoes")
    await page.keyboard.press("Enter")
   let [page2] =await Promise.all([page.waitForEvent("popup"),
      page.locator('//').first().click()])

   console.log.(page);
   console.log.(page);

   // let page2=await context.newPage()
   // await page2.goto("https://www.amazon.in/")
})