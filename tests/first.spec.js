// import {test} from "@playwright/test"
// test("1st example",async()=>{
//     console.log("hi")


// })




 import {test} from "@playwright/test"

 test("fixture", async({page})=>{
    await page.goto("https://www.amazon.in/")
 })