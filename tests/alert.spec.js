import {test, expect} from '@playwright/test';

test.describe('alerts form', ()=>{
    test('form fields', async({page})=>{
        await test.step('form page load', async()=>{
            await page.goto('https://www.globalsqa.com/samplepagetest/');
            await page.locator('.twelve.columns input[type="text"]').fill('test');
            const email = await page.locator('input[type="url"]');
            var input = 'www.testautomation.com';

            for(const char of input){
                 await email.evaluate((el, c) => el.value += c, char);
                 await page.waitForTimeout(100);
            }

            var experience = await page.locator('.select:nth-child(2)');
            await experience.selectOption({index: 2});

            await page.locator('.grunion-field-wrap.grunion-field-checkbox-multiple-wrap  >label:nth-child(6) > input ').check();
            
            page.on('dialog', async (dialog) => {
                const message  = dialog.message();
                expect(
                message === 'Good Luck. Go for it' || message === 'Do you really fill rest of the form?'
                ).toBe(true);
                await dialog.accept();
            })

            await page.locator('button[onclick="myFunction()"]').click();

            await page.locator('#contact-form-comment-g2599-comment').fill('test');
            await page.locator('button[type="submit"]').click();
            await page.waitForTimeout(5000);
            
const field = page.locator('input[type="email"]');
const test = await field.evaluate(el => el.validationMessage);
console.log('Validation message:', test);

expect(test).toContain('Please fill out this field');


        });

    })

})
