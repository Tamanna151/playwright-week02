import { test, expect } from "@playwright/test";

test("test2", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");



    await page.locator('//input[@id="firstName"]').fill("tamanna");
    await expect(page.locator('//input[@id="firstName"]')).toHaveValue("tamanna");

    await page.locator('//input[@id="lastName"]').fill("singh");
    await expect(page.locator('//input[@id="lastName"]')).toBeVisible();

    await page.locator('//input[@id="userEmail"]').fill("tamanna123@gmail.com");
    await expect(page.locator('//input[@id="userEmail"]')).toHaveValue("tamanna123@gmail.com");

    await page.locator('//input[@id="gender-radio-2"]').click();
    await expect(page.locator('//input[@id="gender-radio-2"]')).toBeChecked();

    await page.locator('//input[@id="userNumber"]').fill("9142044188");
    await expect(page.locator('//input[@id="userNumber"]')).toHaveValue("9142044188");

    await page.locator('//input[@value="18 Apr 2026"]').click();

    await page.locator('//input[@id="subjectsInput"]').fill("playwright");

    await expect(page.locator('//input[@id="subjectsInput"]')).toHaveValue("playwright");

    await page.locator('//input[@id="hobbies-checkbox-1"]').check();
    await expect(page.locator('//input[@id="hobbies-checkbox-1"]')).toBeChecked();

    await page.locator('//textarea[@id="currentAddress"]').fill("chandigarh university");
    await expect(page.locator('//textarea[@id="currentAddress"]')).toHaveValue("chandigarh university");

    await page.locator('//input[@id="react-select-3-input"]').click();
    await page.locator('//div[text()="NCR"]').click();

    await page.locator('//input[@id="react-select-4-input"]').click();
    await page.locator('//div[text()="Delhi"]').click();

    await expect(page.getByRole('button', { name: "Submit" })).toBeEnabled();

    await page.getByRole('button', { name: "Submit" }).click();

    await expect(page).toHaveURL(/automation-practice-form/);

    await page.screenshot({path:'screenshot/screenshot02.png'})
});