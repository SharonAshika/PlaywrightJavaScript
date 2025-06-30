import { expect } from '@playwright/test';

//create class to implement selectors and we export keywords so that we can call in other files
export class QaFox {
  //create constructor in page class- 'page'obj in test runner to class via constructor
  constructor(page) {
    this.page = page; //store page to access class methods
    this.header = "#login h2";
    this.loginForm = "#form";
    this.userName = "input[name ='username']";
    this.password = "input[name ='password']";
    this.submitButton = ".btn";
    this.titlePage = "h1.post-title";
    this.logOutButton = ".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color";
    this.primaryMenu = "#menu-primary-items";
    this.practiceButton = 'a[href="https://practicetestautomation.com/practice/"]';
    this.exceptionLink = 'a[href="https://practicetestautomation.com/practice-test-exceptions/"]';
    this.foodExistingField = "#row1 .input-field";
    this.existingFieldDisabled = 'input[disabled="true"]';
    this.editButton = "button#edit_btn";
    this.saveButton = "button#save_btn";
    this.row2Save = "#row2 button#save_btn";
    this.confirmNotify = "div#confirmation";
    this.addButton = "button#add_btn";
    this.rowTwoField = "#row2 .input-field";
  }

  async practiceSiteHeader() {
    var siteHead = await this.page.textContent(this.header);
    console.log("Site Header: " + siteHead);
    return siteHead;
  }

  async loginFormVisible() {
    return await this.page.waitForSelector(this.loginForm, { state: 'visible' });
  } 

  async enterUserName(username) {
    return await this.page.fill(this.userName, username);
  }

  async enterPassword(pword) {
    return await this.page.fill(this.password, pword);
  }

  async triggerSubmitButton() {
    return await this.page.click(this.submitButton);
  }

  async pageTitle(){
     var text = this.page.textContent(this.titlePage);
     return text;
  }
  async verifyLogOut(){
    return this.page.click(this.logOutButton);
  }
  async verifyPrimaryMenu(){
    return await this.page.waitForSelector(this.primaryMenu, {state: 'visible'});
  }
  async triggerPracticeMenu(){
    return await this.page.click(this.practiceButton);
  }
  async triggerExceptionLink(){
    return await this.page.click(this.exceptionLink);
  }
  async getFoodExistingValue(){
    var existingFoodValue = await this.page.inputValue(this.foodExistingField);
    return existingFoodValue;
  }
  async existingValueDisabled(){
    var disable = await this.page.isDisabled(this.existingFieldDisabled);
    return expect(disable).toBe(true);
  }
  async triggerEditButton(){
    return await this.page.click(this.editButton);
  }
  async reFillExistingValue(refill){
    return this.page.fill(this.foodExistingField, refill);
  }
  async triggerSaveFirstButton(){
    return await this.page.click(this.saveButton);
  }
  async verifySaveTwoButton(){
    return await this.page.waitForSelector(this.row2Save, {state:'visible'});
  }
  async triggerSavetwoButton(){
    return await this.page.click(this.row2Save);
  }
  async verifyConfirmNotification(){
   return await this.page.waitForSelector(this.confirmNotify, {state: 'visible'});
  }
  async triggerAddButton(){
    return await this.page.click(this.addButton);
  }
  async verifyRowTwo(){
    return await this.page.waitForSelector(this.rowTwoField, {state: 'visible'});
  }
  async inputValueRowTwo(secondValue){
    return await this.page.fill(this.rowTwoField, secondValue);
  }
}

export default QaFox;