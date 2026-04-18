import {test} from "@playwright/test"
import { log } from "console"

test("login",async({page})=>{

//     await page.goto("https://www.cricbuzz.com")
//     await page.locator('//a[@title="Live Cricket Score"]').click()
//     await page.locator('(//a[@title="Scorecard"])[1]').click()

//     let run = await page.locator('(//div[@class="grid scorecard-bat-grid p-2 border-b border-solid border-cbBorderGrey tb:scorecard-bat-grid-web wb:text-sm wb:scorecard-bat-grid-web"]/div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"])[3]').click()
//     console.log(run);

//     await page.screenshot({path:"screenshot/setServers.png"})
// })

await page.goto("https://www.amazon.com")
await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
await page.locator('//input[@id="nav-search-submit-button"]').click()

let data = await page.locator('(//div[@data-cy="title-recipe"])[1]/a/h2/span | (//span[@class="a-price-whole"])[1]').allTextContents()
await page.waitForTimeout(5000)
console.log(data);

})