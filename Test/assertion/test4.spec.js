import { test, expect } from "@playwright/test";

test("test1", async ({ page }) => {
    await page.goto("https://vinothqaacademy.com/demo-site/");

    await expect(page).toHaveTitle(/Demo Site/);

    await page.locator('//input[@id="vfb-5"]').fill("tamanna");
    await expect(page.locator('//input[@id="vfb-5"]')).toHaveValue("tamanna");

    await page.locator('//input[@id="vfb-7"]').fill("singh");
    await expect(page.locator('//input[@id="vfb-7"]')).toBeVisible();

    await page.locator('(//input[@class="vfb-radio  required  name"])[2]').click();
    await expect(page.locator('(//input[@class="vfb-radio  required  name"])[2]')).toBeChecked();
        await page.locator('//li[@id="item-vfb-20"]')
    await page.locator('//input[@id="vfb-20-1"]').click()


   

    await page.locator('//input[@id="vfb-13-address"]').fill("mohali");
    await page.locator('//input[@id="vfb-13-address-2"]').fill("2");
    await page.locator('//input[@id="vfb-13-city"]').fill("mohali");
    await page.locator('//input[@id="vfb-13-state"]').fill("punjab");
    await page.locator('//input[@id="vfb-13-zip"]').fill("140301");
    await page.locator('//select[@id="vfb-13-country"]').selectOption({ value: "India" });

    await page.locator('//input[@id="vfb-14"]').fill("tamannasingh123@gmail.com");
    await page.locator('//input[@id="vfb-18"]').fill("2026-04-18");

    await page.locator('//select[@id="vfb-16-hour"]').selectOption({ value: "03" });
    await page.locator('//select[@id="vfb-16-min"]').selectOption({ value: "20" });

    await page.locator('//input[@id="vfb-19"]').fill("91420441896");
    await page.locator('//textarea[@id="vfb-23"]').fill("nothing");

    await page.locator('//input[@id="vfb-3"]').fill("33");

    await expect(page.getByRole('button', { name: "Submit" })).toBeEnabled();

    await page.getByRole('button', { name: "Submit" }).click();

    //await expect(page).toHaveURL(/demo-site/);
    await page.screenshot({path:'screenshot/screenshot01.png'})

});