describe("First Test", function () {

    it("First Test - Input Box", function () {

        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys("My Name");
    });
});