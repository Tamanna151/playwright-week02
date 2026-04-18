import {test} from "@playwright/test"
test("flipkart",async({page})=>{
    // await page.goto("https://www.easemytrip.com")
    // await page.locator('[class="input_cld"]').first().click()
    // await page.locator('li[id="frth_6_25/04/2026"]').click()

//     await page.goto("https://www.flipkart.com/")
//  await page.getByTitle("Search for Products, Brands and More",{exact:true}).nth(1).fill("mobiles")
//  //await page.locator('//form[@class="lilxh_ header-form-search"]').click()
//    await page.keyboard.press("Enter")
//    await page.locator('div.col.col-7-12').first().click();
page.goto("https://www.flipkart.com/");
    await page.locator(`[style="color:#3d3d3dff"]`).first().fill("iphone")
    await page.keyboard.press("Enter")
    await page.waitForSelector('.RG5Slk')
    const names=await page.locator('.RG5Slk').allTextContents()
    console.log(names)
})



