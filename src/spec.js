const expect = require("chai").expect;
describe('User should be able to login', function() {
  browser.ignoreSynchronization=true;
    it('should be able to login', async function() {
      browser.get('http://gmail.com');
      await element(by.css("input[type=email]")).sendKeys('testmaca1@gmail.com');
      await element(by.css("div#identifierNext")).click();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.visibilityOf($('input[type=password]')), 10000);
      await element(by.css("input[type=password]")).sendKeys('Qwe123!!1');
      browser.wait(EC.elementToBeClickable($('div#passwordNext')), 5000);
      await element(by.css("div#passwordNext")).click();
      browser.wait(EC.elementToBeClickable($('div.z0 div.L3')), 5000);
      await element(by.css("div.z0 div.L3")).click();
      browser.wait(EC.visibilityOf($('textarea[name=to]')), 10000);
      await element(by.css("textarea[name=to]")).sendKeys("viktar30000@gmail.com");
      browser.sleep(3000);
      await element(by.css("div.Ar.Au div.Am")).sendKeys("Hello Help");
      await element(by.css("div.aoO")).click();
      
     
      const browser2 =await browser.forkNewDriverInstance().ready;
      browser2.ignoreSynchronization = true;
      await browser2.get("http://gmail.com");
      browser2.sleep(3000);
      await browser2.element( by.css("input[type=email]")).sendKeys('viktar30000@gmail.com');
      browser2.sleep(3000);
      await browser2.element(by.css("div#identifierNext")).click();
      browser2.sleep(3000);
      await browser2.element(by.css("input[type=password]")).sendKeys('Qwe123!!1');
      browser2.sleep(3000);
      await browser2.element(by.css("div#passwordNext")).click();
      browser2.sleep(5000);
      element(by.css("span.y2")).isDisplayed().then(isDisplayed => {
        expect(isDisplayed).to.equal(true);
      });
      
  
      });
  });