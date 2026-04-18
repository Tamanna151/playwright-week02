import {test}  from "@playwright/test"
test("login",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('input#username').fill("student")
    await page.locator('input#password').fill("Password123")
    await page.locator('.btn').click()
    await page.locator('wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()

    await page.screenshot({path:"screenshot/setServers.png"})
})
// test ("login",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//     await  page.locator('#name').fill("Tamanna")
//     await page.locator('#email').fill("tamannasingh151@gmail.com")
//     await page.locator("#password").fill("Tamanna123")
//     await page.locator('[type="submit"]').click()
// })