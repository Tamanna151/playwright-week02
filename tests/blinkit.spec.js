import {test} from "@playwright/test"

test("blinkit", async ({ page }) => {
  await page.goto("https://www.blinkit.com");
 await page.locator('//input[@name="select-locality"]').fill("Chandigarh");
  await page.locator('(//div[@class="LocationSearchList__LocationListContainer-sc-93rfr7-0 lcVvPT"])[1]') .click();
 await page.locator('(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[last()-1]' ).click();

 await page.waitForTimeout(2000);
 await page.locator('//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[4]').click()
 await page.locator('//div[@class="CartButton__CartIcon-sc-1fuy2nj-6 iyUoPU"]').click()
 let price= await page.locator('//div[@class="CheckoutStrip__TitleText-sc-1fzbdhy-9 CheckoutStrip__NetPriceText-sc-1fzbdhy-11 bSZmbn fltEEI"]').innerText()
 console.log(price)


})



//   await page.locator('//input[@name="select-locality"]').fill("Chandigarh");
//   await page
//     .locator(
//       '(//div[@class="LocationSearchList__LocationListContainer-sc-93rfr7-0 lcVvPT"])[1]',
//     )
//     .click();

//   await page
//     .locator(
//       '(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[last()-1]',
//     )
//     .click();

//   await page.waitForTimeout(2000);

//   await page
//     .locator(
//       '(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[4]',
//     )
//     .click();

//   await page
//     .locator('//div[@class="CartButton__Button-sc-1fuy2nj-5 gRSsdk"]')
//     .click();

//   let price = await page
//     .locator(
//       '//div[@class="CheckoutStrip__TitleText-sc-1fzbdhy-9 CheckoutStrip__NetPriceText-sc-1fzbdhy-11 bSZmbn fltEEI"]',
//     )
//     .innerText();
//   console.log(price);
// });
// test("blinkit",async({page})=>{
//   await page.goto('https://www.blinkit.com/')
//   await page.locator("//input[@name='select-locality']").fill('Mohali')
//   await page.locator("(//div[@class='LocationSearchList__LocationLabel-sc-93rfr7-2 FUlwF'])[1]").click()
//   await page.locator('(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[last()-1]',).click()
//   await page.waitForTimeout(2000)
//   await page.locator('(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[4]',).click()
//   await page.locator('//div[@class="CartButton__Button-sc-1fuy2nj-5 gRSsdk"]').click()
//   const price=await page.locator("//div[@class='tw-text-400 tw-font-semibold']").innerText()
//   console.log(price)

//   await page.pause()
  
// })