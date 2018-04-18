const LoginPage = require("./po/LoginPage");
const MainPage = require("./po/MainPage")

const expect = require("chai").expect;
describe('User should be able to login', function() {
  browser.ignoreSynchronization=true;
    it('should be able to login', async function() {
      browser.get('http://gmail.com');
      const loginPage = new LoginPage();
      loginPage.login("testmaca1@gmail.com", "Qwe123!!1");
      const mainPage = await new MainPage();
      mainPage.sendMessage("viktar30000@gmail.com", "Hello World");
      
     
      const browser2 =await browser.forkNewDriverInstance().ready;
      browser2.ignoreSynchronization = true;
      await browser2.get("http://gmail.com");
      const browser2LoginPage = new LoginPage(browser2);
      browser2LoginPage.login('viktar30000@gmail.com', "Qwe123!!1");
      const browser2MainPage = new MainPage(browser2);
      await browser2MainPage.checkEmail();

      });
  });