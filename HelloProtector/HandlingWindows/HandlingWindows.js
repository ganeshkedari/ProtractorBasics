describe("Test Suit : Handling Windows", function () {
    describe("Test Group 1 : Handling Windows - HDFC ", function () {
        beforeEach(function () {
            console.log("############## [ Starting Test ################")
            browser.ignoreSynchronization = true;
            browser.get('http://www.hdfcbank.com/');
        });

        afterEach(function () {
            console.log("############## [ Test Completed ################")
            browser.sleep(3000);
        });

        it("Test Case 1.1 : Handling Windows - HDFC", function () {
                element(by.id('loginsubmit')).click();
        });
    });

});
