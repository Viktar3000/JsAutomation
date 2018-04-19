const AbstractPage = require("./AbstractPage");
const EC = protractor.ExpectedConditions;
const expect = require("chai").expect;

class LoginPage extends AbstractPage {
 
    constructor (customBrowser){
        super(customBrowser);
        this.userNameInput = this.browser.element(by.css("input[type=email]"));
        this.userPassword = this.browser.element(by.css("input[type=password]"));
        this.identifierButton = this.browser.element(by.css("div#identifierNext"));
        this.passwordButton = this.browser.element(by.css("div#passwordNext"));

    }
     
    async login(username, password) {

        await this.userNameInput.sendKeys(username);
        await this.identifierButton.click();
        await browser.wait(EC.visibilityOf(this.userPassword), 10000);
        await this.userPassword.sendKeys(password);
        await browser.wait(EC.elementToBeClickable(this.passwordButton), 5000);
        await this.passwordButton.click();
        
    }
}
module.exports = LoginPage;