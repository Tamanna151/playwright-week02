import {test} from "@playwright/test"
test("drop",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/")
    await page.locator('//select[@id="country_code"]').selectOption({value:"+92"})
    await page.locator('//select[@id="select3"]').selectOption({value:"India"})
})