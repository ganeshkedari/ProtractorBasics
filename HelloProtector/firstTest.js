describe("First Test", function () {

    it("First Test - Input Box", function () {

        browser.get('https://angularjs.org/');
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
        element(by.model('yourName')).sendKeys("Ganesh");
        element(by.binding('yourName')).getText().then(function(text){
            console.log(text);
        });
    });
});