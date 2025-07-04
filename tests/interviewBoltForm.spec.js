import {test, expect} from '@playwright/test';

test.describe('Creating bolt account by filling the form', ()=>{
    test('covering it in multiple test cases', async({page})=>{
        await test.step('load page url and verify header',  async()=>{
            await page.goto('https://bolt.playrealbrokerage.com/login');
            await page.locator('a[href="/register"]').click();
            await page.waitForURL('https://bolt.playrealbrokerage.com/register');
            await page.waitForSelector('img[src="/assets/lanyard-DaNLaejW.svg"]');
            await page.locator('#root >div >div >div:nth-child(1) > div > form').isVisible();
        });
        await test.step('negative case1 - Mandatory field: LastName', async()=>{
            var firstName = await page.locator('input[data-testid="firstName"]');
            await firstName.fill('Sharon');
            await page.keyboard.press('Tab');
            await firstName.click();
             await page.waitForSelector('input[data-invalid="true"]');
            var fieldError = await page.locator('.p-5.bg-white div:nth-child(2) > div:nth-child(3)').textContent();
            console.log('LastName field Error Message', fieldError);
            await expect(fieldError).toEqual('Last name is required');
      });
      await test.step('password eye icon view', async()=>{
        var password = await page.locator('input[data-testid="password"]');
        await password.pressSequentially('TestSharon@1234');
        await page.locator('.mt-2:nth-child(6) >div >div >div:nth-child(2)').click();
        await page.locator('svg[data-icon="eye-slash"]').isVisible();
        await password.fill('');
      });
     await test.step('filling the details', async()=>{
            await page.locator('input[data-testid="firstName"]').fill('Sharon');
            await page.locator('input[data-testid="lastName"]').fill('Ashika');
            await page.locator('input[data-testid="username"]').fill('sharon123');
            await page.locator('input[data-testid="emailAddress"]').fill('sharonashika7@mailinator.com');
            await page.locator('input[data-testid="country"]').click();
            await page.waitForTimeout(4000);
           await page.locator('div[role="option"]', { hasText: 'Canada' }).click();
            var inputPassword = 'TestSharon@1234';
            await page.locator('input[data-testid="password"]').pressSequentially(inputPassword);
            await page.locator('input[data-testid="confirmPassword"]').fill(inputPassword);
            await page.locator('input[name="terms"]').check();
            await page.locator('input[name="permission"]').check();
            await page.locator('div.mt-5 > button > span').click();
            await page.waitForTimeout(7000);
       });
      


    });

});