import {test} from "@playwright/test"
test("keyboard",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByLabel("Name").click()
    await page.keyboard.insertText('Tamanna')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.getByLabel('Email Id').fill('tamanna123@gmail.com')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')
    await page .mouse.click('//button[@id="btn_a"]')
    await page.pause()
    

})


