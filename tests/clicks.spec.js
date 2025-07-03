import {test,expect} from '@playwright/test';
import { TIMEOUT } from 'dns';

test.describe('click', async()=>{
    test('types of click', async({page})=>{
        await test.step('right click', async()=>{ 
        await page.goto('https://www.tutorialspoint.com/selenium/practice/buttons.php');
        await page.waitForTimeout(5000);
        await page.locator('.btn.btn-secondary').click({button: 'right'});
        await page.waitForTimeout(5000);
    });

    await test.step('dynamic click', async()=>{
        await page.locator('.btn.btn-primary').click();
        await page.waitForSelector('#welcomeDiv');
        let dynamicClick = await page.locator('#welcomeDiv').textContent();
        console.log(dynamicClick);
        await expect(dynamicClick).toContain('You have done a dynamic click');
        await page.waitForTimeout(5000);

    });
    await test.step('double click',async()=>{
        await page.locator('.btn.btn-success').dblclick();
        let doubleClick = await page.locator('#doublec').textContent();
        console.log(doubleClick);
        await expect(doubleClick).toContain('You have Double clicked');
        await page.waitForTimeout(5000);
    });

    })
})