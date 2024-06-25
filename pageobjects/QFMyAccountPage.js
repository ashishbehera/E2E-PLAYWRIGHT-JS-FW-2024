const { test, expect } = require('@playwright/test');

class QFMyAccountPage {
    constructor(page) {
        this.page = page;
        this.lblRegisterAccount = page.locator('div[id="content"] h1')

    }

    async verifyRegisterAccTxt(message) {
        await expect(this.lblRegisterAccount).toHaveText(message);
    }
}
module.exports = { QFMyAccountPage }