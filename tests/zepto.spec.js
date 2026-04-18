import {test} from "@playwright/test"
test("zepto",async({page})=>{
   await page.goto("https://www.zepto.com/")
 await   page.locator('//span[text()="Cafe"]').click()
 await page.locator('//span[text()="Protinex Hot Chocolate"]').click()
 let price= await page.locator('(//span[@class="cp62rX c9OiKy cu4Qk6"])[1]').innerText()
 console.log(price)
})