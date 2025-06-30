import{test, expect} from '@playwright/test';

test('verify child window text', async({page, browser})=>{
    const context = await browser.newContext();
    const pageOne = await context.newPage();
    await pageOne.goto("https://www.tutorialspoint.com/selenium/practice/browser-windows.php");
    await pageOne.waitForTimeout(3000);
    await pageOne.locator('button[title="New Tab"]').click();
    const newPage = await context.waitForEvent('page');  //waitFOr newsession
    await newPage.waitForLoadState('load');  //wait for all element dom to load
    const childText = await newPage.locator('.header.selenium.bg-white.p-3 h1').innerText();
    console.log("test:",childText);
    await expect(childText).toContain("Selenium - Automation Practice Form");
    const text = await newPage.locator('xpath=/html/body/main/div/div').innerText();
    console.log("test1:",text);
    await expect(text).toContain('New Tab', 'Sample New Tab');
    await newPage.waitForTimeout(4000);
    await pageOne.bringToFront();
    await pageOne.waitForTimeout(3000);

});