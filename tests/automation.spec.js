import {test} from "@playwright/test"

test("login",async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator('//input[@id="user-name"]').fill("student")
    await page.locator('//input[@id="password"]').fill("password123")
    await page.locator('//input[@id="login-button"]').click()

   
})
 // await page.screenshot({path:"screenshot/setServers.png"})