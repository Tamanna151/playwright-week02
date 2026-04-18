import {test} from "@playwright/test"

// test("1st fixtures",async({page})=>{
//    await page.goto("https://www.amazon.in")


// })

// test("2nd fixtures",async({browser})=>{
// let context = await browser.newContext();
// let page = await context.newPage();
// let page1= await context.newPage();
// await page.goto("https://www.amazon.in")
// await page1.goto("https://www.facebook.com")
// })
test("2nd fixtures",async({browserName,browser})=>{
 let context = await browser.newContext();
 let page = await context.newPage();
 let page1= await context.newPage();
await page.goto("www.flipkart.com");
await page1.goto("https://www.facebook.com");
console.log(browserName);
})

