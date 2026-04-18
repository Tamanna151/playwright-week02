import {test} from "@playwright/test"
test("first",async({page})=>{


// await page.goto("https://www.saucedemo.com/")
// await page.locator('[id="user-name"]').fill("student")
// await page.locator('[id="password"]').fill("password123")
// await page.locator('.submit-button').click()
// })
  await page.goto("https://practicetestautomation.com/practice-test-login")
  await page.locator('input#username').fill("tamanna")
  await page.locator('input#password').fill("tamanna123")
  await page.waitForTimeout(5000)
  await page.pause()
  await page.locator('.btn').click()
//   await page.pause()

// 
})