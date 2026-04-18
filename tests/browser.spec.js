import {chromium, test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.amazon.in")
//     let size=await page.viewportSize()
//     console.log(size);
// })
 test ("browser example",async({browser})=>{
  browser= await chromium.launch()
    let context = await browser.newContext();
 let page = await context.newPage();

 await page.goto("https://www.google.com")
//  let cookies= await context.cookies()
//  console.log(cookies)
let title=await  page.title()
console.log(title);
await page.screenshot({path:"screenshot/setServers.png"})

 })