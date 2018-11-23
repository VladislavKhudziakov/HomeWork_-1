
describe('some test', () => {

    it('should go to point "tutorial"',() => {

        browser.get('https://angularjs.org/');

        let dropdown = element.all(by.css('.dropdown')).first();
        let dropdownToggle = dropdown.all(by.css('.dropdown-toggle')).first();
        let dropdownMenu = dropdown.all(by.css('.dropdown-menu')).first();
        let dropdownItem = dropdownMenu.all(by.tagName('li')).first();
        let dropdownLink = dropdownItem.element(by.tagName('a'));

        dropdownToggle.click();
        dropdownLink.click();

        /*
        --------------------------this is my way to solve this task, which i wrote at previous lesson--------------------------

        let dropdownToggle = element(by.css('.dropdown-toggle'));
        let dropdownElement = element(by.css('a[href="https://docs.angularjs.org/tutorial"]'));
        dropdownToggle.click();
        dropdownElement.click();
         */

        expect(browser.getCurrentUrl()).toEqual('https://docs.angularjs.org/tutorial');
    });

    it('should find span with "npm install" text', () => {

        let EC = protractor.ExpectedConditions;

        //findind necessary link
        let bootstrapLink = element(by.cssContainingText('.ng-binding', '0 - Bootstrapping'));

        bootstrapLink.click();

        /*
        --------------------------the first way to solve this task--------------------------

        browser.wait(() => EC.presenceOf(element(by.cssContainingText('.pln', 'npm install'))), 30000);
        let npmInstallElement = element(by.cssContainingText('.pln', 'npm install'));
        expect(npmInstallElement.isEnabled()).toBe(true);
        */

        /*
        --------------------------the second way to solve this task--------------------------

        browser.manage().timeouts().implicitlyWait(2000);
        let npmInstallElement = element(by.cssContainingText('.pln', 'npm install'));
        expect(npmInstallElement.isEnabled()).toBe(true);
        */


        //--------------------------the third way to solve this task--------------------------

        expect(browser.wait(() => {
                EC.presenceOf(element(by.cssContainingText('.pln', 'npm install')));
                return element(by.cssContainingText('.pln', 'npm install'));
            }, 30000)
            .then(element => element.isEnabled())).toBe(true);
    });

    it('should return to angular main page', function () {
        /*
        --------------------------the first way to solve this task--------------------------

        let brandButton = element(by.css('.brand'));
        brandButton.click();
        expect(browser.getCurrentUrl()).toEqual('https://angularjs.org/');
        */

        let container = element(by.css('.container'));
        let brandButton = container.element(by.tagName('h1'));
        let brandButtonLink = brandButton.element(by.tagName('a'));

        brandButtonLink.click();

        expect(browser.getCurrentUrl()).toEqual('https://angularjs.org/');
    });
});
