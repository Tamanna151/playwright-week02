import { test, expect } from "@playwright/test";
import excel from "exceljs";
import fs from "fs";

test("flipkart", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    await page.locator('//div[text()="Home"]').click();
    // await page.waitForSelector('(//div[@style="--aspect-ratio:45/64;--aspect-ratio-m:45/64;--aspect-ratio-l:45/64;flex:1"])[1]',{state:"visible"})
    // await page.locator('(//div[@style="--aspect-ratio:45/64;--aspect-ratio-m:45/64;--aspect-ratio-l:45/64;flex:1"])[1]').click();
    // await page.click('(//a[@style="align-items:stretch;border-width:0;box-sizing:border-box;display:flex;flex-basis:auto;flex-direction:column;flex-shrink:0;min-height:0;min-width:0;position:relative;z-index:0;border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-radius:16px;border-top-left-radius:16px;border-top-right-radius:16px;flex:1;overflow:hidden;border-curve:continuous"])[1]')
    //!sometimes it is working sometimes it is not
   await  page
    .locator('(//div[@style="--aspect-ratio: 45/64; --aspect-ratio-m: 45/64; --aspect-ratio-l: 45/64; flex: 1 1 0%;"])[1]').click();
    await page.locator('[title="4★ & above"]').click();
    await page.locator('//div[text()="Price -- Low to High"]').click();
    await page.locator('(//div[@class="RGLWAk"])[5]').click();
    await page.waitForTimeout(5000);

    let name =await page.locator('//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]').textContent()
    let price =await page.locator('//div[@class="v1zwn21l v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent();

    const filePath = "C:/Users/HP/Desktop/PLAYWRIGHT/tests/Excel/website.xlsx";
       const workbook = new excel.Workbook();
    const sheet = workbook.addWorksheet("Sheet8");
     sheet.addRow(["Product Name", "Price"]);
    sheet.addRow([name, price]);
     await workbook.xlsx.writeFile("website.xlsx");

    console.log("Saved:", name, price);

})