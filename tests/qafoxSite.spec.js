import { test, expect } from '@playwright/test';
import { QaFox } from '../pages/qafox.page.js';
import { TIMEOUT } from 'dns';
//we require qafox page to access selectors from the page 
//we require test module from pl/test package

//main test concept with description 
test.describe.serial("parent page", () => {
    //we use test to define each test case with page fixture
    test("test practice", async({page})=> {
       const qaFox = new QaFox(page);
    

     await test.step('load url', async () => {
        await page.goto("https://practicetestautomation.com/practice-test-login/");
        await page.waitForLoadState('load'); 
        //or await page.goto("https://www.qafox.com/selenium/selenium-practice/",{waitUntil:'load'});
         var siteHead = await qaFox.practiceSiteHeader();
        await expect(siteHead).toEqual("Test login");

   });
    await test.step("verify login functionality", async() => {
        await qaFox.loginFormVisible();
        await qaFox.enterUserName("student");
        await qaFox.enterPassword("Password123");
        await qaFox.triggerSubmitButton();
        await page.waitForURL("https://practicetestautomation.com/logged-in-successfully/");
        var text = await qaFox.pageTitle();
        await expect(text).toEqual("Logged In Successfully");
        await qaFox.verifyPrimaryMenu();
  });
  await test.step("practice page", async()=>{
    await qaFox.triggerPracticeMenu();
    await page.waitForURL("https://practicetestautomation.com/practice/");
    await qaFox.triggerExceptionLink();
    await page.waitForURL("https://practicetestautomation.com/practice-test-exceptions/");
  });
  await test.step('value add', async()=> {
   var existingFoodValue = await qaFox.getFoodExistingValue();
   expect(existingFoodValue).toEqual("Pizza");
   await qaFox.existingValueDisabled();
   await qaFox.triggerEditButton();
   await qaFox.reFillExistingValue('burger');
   await page.waitForTimeout(4000);
   await qaFox.triggerSaveFirstButton();
   await qaFox.verifyConfirmNotification();
   await qaFox.triggerAddButton();
   await qaFox.verifyRowTwo();
   await qaFox.inputValueRowTwo("biscuit");
   await qaFox.verifySaveTwoButton();
   await qaFox.triggerSavetwoButton();
   await qaFox.verifyConfirmNotification();

  });
 
         
     
     
     
 
});
});
