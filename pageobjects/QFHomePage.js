const { test, expect } = require('@playwright/test');

class QFHomePage {
    constructor(page) {
        this.page = page;
        this.accountLink = page.locator('span',{hasText: 'My Account'});
        this.registerLink = page.locator('a',{hasText: 'Register'});
        this.lblRegisterAccount = page.locator('div[id="content"] h1')


    }

    async goTo() {
        await this.page.goto("https://tutorialsninja.com/demo/index.php");
    }

    async myAccountLink() {
        await this.accountLink.click();
    }

    async naviateAccountRegPage() {
        await this.registerLink.click();
    }

    async verifyRegisterAccTxt() {
        await expect(this.lblRegisterAccount).toHaveText('Register Account');
    }
}
module.exports = { QFHomePage }