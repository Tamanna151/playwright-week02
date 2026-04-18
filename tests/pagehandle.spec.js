// import {test} from "@playwright/test"
// import { promises } from "node:dns"
// test.only("page handling",async({browser})=>{
//     let context= await browser.newContext()
//     let page= await context.newPage()
//     await page.goto("https://www.flipkart.com/")
//     await page.getByTitle("Search for Products, Brands and More",{exact:true}).nth(1).fill("mobiles")
//     await page.keyboard.press("Enter")
//    let[page2]=await  promise.all([ page.waitForEvent("popup") ,
//          page.locator('//div[@class="RG5Slk"]').first().click(),])
   
//     await page2.locator('//div[text()="Buy now"]').click()
// })
// import { test, expect } from '@playwright/test';

// test('Check number of mobile results on Amazon', async ({ page }) => {

//   await page.goto('https://www.amazon.com');


//   await page.locator('#twotabsearchtextbox').fill('mobiles');
//   await page.locator('#nav-search-submit-button').click();

 
//   const products = page.locator('//div[@class="nav-search-scope nav-sprite"]');


//   await expect(products).toHaveCount(10); 
  
// });
import { test, expect } from '@playwright/test';

test('Amazon mobile count', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.locator('#twotabsearchtextbox').fill('mobiles');
  await page.locator('#nav-search-submit-button').click();


  await page.waitForSelector("div[data-component-type='s-search-result']");

  const products = page.locator("div[data-component-type='s-search-result']");

  const count = await products.count();
  console.log("Total products:", count);

  expect(count).toBeGreaterThan(0);
});