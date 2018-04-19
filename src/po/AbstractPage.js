class AbstractPage {

    constructor(customBrowser) {
        if (customBrowser) {
            this.browser = customBrowser;
        } else {
            this.browser = browser;
        }
    }

}
module.exports = AbstractPage;