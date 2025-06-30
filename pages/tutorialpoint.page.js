import{test} from '@playwright/test';

export class tutorialPoint{

    constructor(page){
        this.page = page;
        this.elementsMenu = "#headingOne button";
        this.elementsMenu = "#collapseOne div.accordion-body.bg-white ul.list-group.rounded";
        this.checkboxMenu = 'a[href="check-box.php"]';
        this.firstCheckBox = "#c_bs_1";
        this.radioButtonMenu = 'a[href="radio-button.php"]';
        this.yesRadioButton = 'input[onclick="show2();"]';
        this.links = 'a[href="links.php"]';
        this.homeHyperLink = 'a[href="https://www.tutorialspoint.com/index.htm"]';

    }

    async triggerElementMenu(){
        return this.page.click(this.elementsMenu);
    }
    async verifyElementMenu(){
        return this.page.waitForSelector(this.elementsMenu, {state: 'visible'});
    }
    async triggerCheckBoxMenu(){
        return await this.page.click(this.checkboxMenu);
    }
    async triggerFirstCheckBox(){
        return await this.page.check(this.firstCheckBox);
    }
    async triggerRadioMenu(){
        return await this.page.click(this.radioButtonMenu);
    }
    async triggerRadioButton(){
        return await this.page.click(this.yesRadioButton);
    }
    async triggerLinks(){
        return await this.page.click(this.links);
    }
    async triggerHomeHyperLink(){
        return await this.page.click(this.homeHyperLink);
    }

}

export default tutorialPoint;