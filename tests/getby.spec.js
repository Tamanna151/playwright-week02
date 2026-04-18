import {test} from "@playwright/test"
test("getby",async({page})=>{

     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
   //  await page.goto("https://www.saucedemo.com")
   
 //await page.getByPlaceholder("Username").click()
// await page.getByPlaceholder('Enter your name',{exact:true})
// await page.getByTestId("username",{exact:true}).fill("tamanna")
// await page.getByTestId("password",{exact:true}).fill("tamanna@123")
// const username = await page.locator('#user-name').textContent();
// console.log(username);
// await page.getByRole('button',{name:"Login"}).click()

await page.keyboard.insertText("tamanna")


})