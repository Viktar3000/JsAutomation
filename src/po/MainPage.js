const AbstractPage = require("./AbstractPage");
const EC = protractor.ExpectedConditions;



class MainPage extends AbstractPage {
        constructor(customBrowser){
        super(customBrowser);

        this.composeButton = this.browser.element(by.css('div.z0 div.L3'));
        this.toField = this.browser.element(by.css('textarea[name=to]'));
        this.messageField = this.browser.element(by.css('div.Ar.Au div.Am'));
        this.sendMessageButton = this.browser.element(by.css('div.aoO'));

        }

         async sendMessage(to, messageBody){


              await this.composeButton.click();
              browser.wait(EC.visibilityOf(this.toField), 10000);
              await this.toField.sendKeys(to);
              browser.wait(EC.visibilityOf(this.messageField), 3000);
              await this.messageField.sendKeys(messageBody);
              await this.sendMessageButton.click();



        }
}
module.exports = MainPage;