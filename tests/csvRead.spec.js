import {test,expect} from '@playwright/test';
// import{fs} from 'fs'; //interact with file system
// import{path} from 'path'; //helps utility to interact with files 
// import {parse} from 'csv-parse/sync';

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

//store csv in var
const csv = parse(fs.readFileSync(path.join(__dirname, 'usersData.csv')),{
    columns:true,
    skip_empty_lines:true
});
console.log(csv);
//parse used to convert csv to array or objects
//fs.readFileSync() - returns the content of path

test('read values in CSV file', async({page})=>{
    for(const user of csv){
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');
    await page.waitForLoadState('domcontentloaded');
    await page.fill('#fullname', user.Name);
    await page.fill('#email', user.Email_id);

    }

});