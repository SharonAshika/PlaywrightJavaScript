import{test, expect} from '@playwright/test';
import {tutorialPoint} from '../pages/tutorialpoint.page';

test.describe.serial("different scenarios automation", ()=>{
    test("tutorial point website scenarios", async({page,context})=>{
        const tutoPoint = new tutorialPoint(page);
           
      await test.step("url load and verify", async()=>{
            await page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php");
            await page.waitForLoadState('load');
            await tutoPoint.triggerElementMenu();
            await tutoPoint.verifyElementMenu();
            await tutoPoint.triggerCheckBoxMenu();
            await tutoPoint.triggerFirstCheckBox();
            await page.waitForTimeout(6000);
            await tutoPoint.triggerRadioMenu();
            await page.waitForURL("https://www.tutorialspoint.com/selenium/practice/radio-button.php");
            await tutoPoint.triggerRadioButton();
            await tutoPoint.triggerLinks();
            await page.waitForURL("https://www.tutorialspoint.com/selenium/practice/links.php");
            
            const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            await tutoPoint.triggerHomeHyperLink()
            ]);
            await newPage.waitForLoadState('domcontentloaded');


        });

    await test.step("upload/download", async()=>{
        await page.goto("https://www.tutorialspoint.com/selenium/practice/upload-download.php");
        await page.waitForLoadState('load');
       // await page.screenshot({fullPage:true, path: './screenshot/sampletest.png'});
        await page.waitForSelector('#uploadFile', {state:'visible'});
       //await page.setInputFiles('#uploadFile', 'C:\\Users\\sharo\\OneDrive\\Documents\\GitHub\\PlaywrightJavaScript\\screenshot\\sampletest.png', {timeout: 10000});
       await page.waitForTimeout(5000);
       var test = await page.setInputFiles('#uploadFile');
       await test.setInputFiles(null);
        //locator type: we can use empty array to remove files ([]);
     await page.waitForTimeout(5000);


    })

    })
})