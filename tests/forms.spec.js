import {test, expect} from '@playwright/test';

test.describe('forms', ()=>{
    test('form fields', async({page})=>{
        await test.step('form page load', async()=>{
            await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
            var practiceForm = await page.locator('#practiceForm h1').textContent();
            console.log(practiceForm);
            await expect(practiceForm).toContain('Student Registration Form');
        });
        await test.step('fill details', async()=>{
            await page.locator('#name').fill('Hello');
            await page.locator('#email').fill('test@mailinator.com');
            await page.locator('#practiceForm >div:nth-child(4) >div >div >div:nth-child(2) > input').click();
            await page.locator('#mobile').fill('7837456378');
            await page.locator('#dob').fill('2025-07-03');
            await page.locator('#subjects').fill('English');
            //await page.setInputFiles('input[type="file"]', 'C:\\Users\\sharo\\OneDrive\\Documents\\GitHub\\PlaywrightJavaScript\\tests\\usersData.csv');
            await page.locator('textarea[placeholder="Currend Address"]').fill('123 Main Street,.\nApartment 4B, New York,.\nNY 10001');
            await page.keyboard.press('Tab');
            await page.locator('#state').click();
            await page.selectOption('#state', { label: 'Haryana' });
            await page.locator('#city').click();
            await page.selectOption('#city', {index: 2});
            await page.locator('input[value="Login"]').click();
            await page.waitForTimeout(5000);
        });
    })


})