import {test, expect} from '@playwright/test';

test.describe('links new tab', ()=>{
    test('types of links', async({browser})=>{
        const context = await browser.newContext();
        const parentPage = await context.newPage();
    await test.step('new tab verify header', async()=>{
            await parentPage.goto('https://www.tutorialspoint.com/selenium/practice/buttons.php');
            await parentPage.waitForLoadState('domcontentloaded');
            await parentPage.locator('a[href="links.php"]').click();
            await parentPage.waitForURL('https://www.tutorialspoint.com/selenium/practice/links.php');
            await parentPage.waitForSelector('h5.text-left:nth-child(2)');
            var HomeLink = await parentPage.locator('div p.text-left:nth-child(3)').textContent();
            console.log(HomeLink);
            await expect(HomeLink).toContain('Home');

            const [childPage] = await Promise.all([
             context.waitForEvent('page'),
             parentPage.click('div p.text-left:nth-child(3) a'),
             parentPage.waitForTimeout(6000)
                ]
            )
            await childPage.waitForLoadState('domcontentloaded');
            await childPage.waitForSelector(".banner_img");
            await parentPage.bringToFront();
            await parentPage.waitForTimeout(5000);
            await childPage.close();
        });

    await test.step('blank page verify', async()=>{
            await parentPage.waitForSelector('div p.text-left:nth-child(4) a');

            const [blankPage] = await Promise.all(
                [
                context.waitForEvent('page'),
                parentPage.locator('div p.text-left:nth-child(4) a').click(),
                ]
            )
            await expect(blankPage.url()).toBe('about:blank');
            await parentPage.bringToFront();
            await parentPage.waitForTimeout(4000);
        });
    await test.step('link -created api call', async()=>{
        await parentPage.waitForSelector('div p.text-left:nth-child(6) a');
        await parentPage.locator('div p.text-left:nth-child(6) a').click();
        var createdText = await parentPage.locator('div .create').textContent();
        console.log(createdText);
        await expect(createdText).toContain('Link has responded with staus 201 and status text Created');
    });

    await test.step('verify broken links ', async()=>{
        await parentPage.locator('a[href="broken-links.php"]').click();
        await parentPage.waitForURL('https://www.tutorialspoint.com/selenium/practice/broken-links.php');
        var brokenHeader = await parentPage.locator('div > h5:nth-child(2) strong').textContent();
        console.log(brokenHeader);
        await expect(brokenHeader).toContain('Broken image');
        await parentPage.locator('a[href="javascript:void(0);"]').isVisible();
        await parentPage.locator('a[href="broken-link.php"]').click();
        await parentPage.waitForURL('https://www.tutorialspoint.com/selenium/practice/broken-link.php');
        var statusCode = await parentPage.locator('div h5').textContent();
        console.log(statusCode);
        await expect(statusCode).toContain('This page returned a 500 status code.');
        await parentPage.locator('div h4 a').isVisible();
        await parentPage.locator('div h4 a').click();
        await parentPage.waitForURL('https://www.tutorialspoint.com/selenium/practice/broken-links.php');
        await parentPage.waitForTimeout(5000);
    });


    })


})