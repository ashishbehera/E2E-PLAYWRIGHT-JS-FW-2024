const { test, expect } = require('@playwright/test');

class QFAccountRegPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.email = page.getByPlaceholder('E-Mail');
        this.telephone = page.getByPlaceholder('Telephone');
        this.password = page.locator('input[name="password"]');
        this.passwordConfirm = page.locator('input[name="confirm"]');
        this.chkBox = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('.btn-primary');
        this.valMessageLbl = page.locator('.text-danger')


    }


    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
    } 

    async enterEmail(email) {
        let emailDynVal = Math.random()*10000;
        const emailValue = `radheshyamdas${emailDynVal}@gmail.com`
        if(email === 'VALID') {
            await this.email.fill(emailValue);
        }
     
    }

    async enterTelephone(telephone) {
        await this.telephone.fill(telephone);
    }

     async enterPassword(password) {
        await this.password.fill(password);
    } 

    async enterConfirmPassword(confirmPassword) {
        await this.passwordConfirm.fill(confirmPassword);
    }

    async clickCheckBox() {
        await this.chkBox.click();
    }

    async clickBtnContinue() {
        await this.btnContinue.click({force: true});
    }

    async verifyFirstNameValTxt(message,index) {
        await expect(this.valMessageLbl.nth(index)).toHaveText(message);
    }
}
module.exports = { QFAccountRegPage }