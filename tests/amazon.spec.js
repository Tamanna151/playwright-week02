import {test,expect} from "@playwright/test"

// test("login",async({page})=>{

//     await page.goto("https://www.amazon.com")
    // await page.locator('//input[@id="twotabsearchtextbox"]').fill("Shoes")
    // await page.locator('//input[@id="nav-search-submit-button"]').click()
    // await page.locator('//li[@id="p_123/339703"]/span/a/div/label/i').click()
//     await page.getByTitle("nav-searchbar nav-progressive-attribute").click()

//     await page.screenshot({path:"screenshot/setServers.png"})
// })

//span[@class="a-price-whole"])[4]/ancestor::div[@data-cy="price-recipe"]/preceding-sibling::div[@data-cy="title-recipe"]//


import { promises } from "node:dns"



// test.only("page handling",async({browser})=>{
//     let context=await browser.newContext()
//     let page=await context.newPage()
//     await page.goto('https://www.amazon.com/')
//     await page.locator("//input[@id='twotabsearchtextbox']").fill("mobiles")
//     await Promise.all([page.waitForNavigation(),page.locator("(//div[@data-cy='title-recipe'])[1]/a/h2").first().click()])
//     await page.locator('//input[@id="buy-now-button"]').click()
//     await page.pause()
// })


test.only("page handling", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://www.amazon.com/');


    await page.locator("#twotabsearchtextbox").fill("mobiles");
    await page.keyboard.press("Enter");


    const firstProduct = page.locator("(//h2//a)[1]");
    await expect(firstProduct).toBeVisible();

   
    await Promise.all([
        page.waitForURL(/amazon\.com/),
        firstProduct.click()
    ]);


    await expect(page).toHaveURL(/amazon\.com/);

    
    const buyNowBtn = page.locator('#buy-now-button');
    await expect(buyNowBtn).toBeVisible();

    await buyNowBtn.click();

    await page.pause();
});
