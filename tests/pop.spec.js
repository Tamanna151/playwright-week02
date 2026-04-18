import {test} from "@playwright/test"


test.only("waits2", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2"
  );

//   // Prepare promises BEFORE click
//   const popup1 = page.waitForEvent("popup");
//   const popup2 = page.waitForEvent("popup");
//   const popup3 = page.waitForEvent("popup");

//   // Trigger action
//   await page.locator('//button[text()="Shop Now"]').click();

//   // Capture all pages
//   const page2 = await popup1;
//   const page3 = await popup2;
//   const page4 = await popup3;
// const [p1, p2, p3] = await Promise.all([
//   page.waitForEvent('page'),
//   page.waitForEvent('page'),
//   page.waitForEvent('page'),
//   page.click('//button[text()="Shop Now"]')
// ]);

// await p1.locator('//button[text()="Add to Cart"]').click();
// await p2.locator('//button[text()="Add to Cart"]').click();
//await p3.locator('//button[text()="Add to Cart"]').click();
await page.getByRole()

});
