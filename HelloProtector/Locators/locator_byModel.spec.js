describe("Test Suit : Localtors", function () {
    describe("Test Group 1 : Localtor By model,className,buttonText ", function () {
        beforeEach(function () {
            console.log("############## [ Starting Test ################")
            browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        });

        afterEach(function () {
            console.log("############## [ Test Completed ################")
            browser.sleep(3000);
        });

        it("Test Case 1.1 : Login Page", function () {
            element(by.model('Auth.user.name')).sendKeys("angular");
            element(by.model('Auth.user.password')).sendKeys("password");
            element(by.model('model[options.key]')).sendKeys("Protractor User");
            element(by.buttonText('Login')).click();
            element(by.className('ng-scope')).getText().then(function (text) {
                console.log(text);
            });
        });
    });
    describe("Test Group 2 : Localtor By binding , id ", function () {
        beforeEach(function () {
            console.log("############## [ Starting Test ################")
            browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        });

        afterEach(function () {
            console.log("############## [ Test Completed ################")
            browser.sleep(3000);
        });
        it("Test Case 1.1 : Calculator", function () {
            element(by.model('first')).sendKeys(1);
            element(by.model('second')).sendKeys(1);
            element(by.model('operator')).$("[value='MULTIPLICATION']").click();
            element(by.id('gobutton')).click();

            element(by.binding('latest')).getText().then(function (text) {
                console.log('result.value' + ' : ' + text);
            });
            element(by.binding('result.timestamp')).getText().then(function (text) {
                console.log('result.timestamp' + ' : ' + text);
            });
            element(by.binding('result.first')).getText().then(function (text) {
                console.log('result.first' + ' : ' + text);
            });
            element(by.binding('result.operator')).getText().then(function (text) {
                console.log('result.operator' + ' : ' + text);
            });
            element(by.binding('result.second')).getText().then(function (text) {
                console.log('result.second' + ' : ' + text);
            });
            element(by.binding('result.value')).getText().then(function (text) {
                console.log('result.value' + ' : ' + text);
            });
        });

    });
    describe("Test Group 3 : Repeator ", function () {
        beforeEach(function () {
            console.log("############## [ Starting Test ################")

        });

        afterEach(function () {
            console.log("############## [ Test Completed ################")
            browser.sleep(3000);
        });

        it("Test Case 1.1 : Adding Data", function () {

            console.log('Test Case 1.1 : Adding Data');
            browser.get('http://www.way2automation.com/angularjs-protractor/calc/');

            element(by.model('first')).sendKeys(1);
            element(by.model('second')).sendKeys(2);
            element(by.model('operator')).$("[value='ADDITION']").click();
            element(by.id('gobutton')).click();

            element(by.model('first')).sendKeys(3);
            element(by.model('second')).sendKeys(4);
            element(by.model('operator')).$("[value='DIVISION']").click();
            element(by.id('gobutton')).click();

            element(by.model('first')).sendKeys(5);
            element(by.model('second')).sendKeys(6);
            element(by.model('operator')).$("[value='MODULO']").click();
            element(by.id('gobutton')).click();

            element(by.model('first')).sendKeys(7);
            element(by.model('second')).sendKeys(8);
            element(by.model('operator')).$("[value='MULTIPLICATION']").click();
            element(by.id('gobutton')).click();

            element(by.model('first')).sendKeys(9);
            element(by.model('second')).sendKeys(10);
            element(by.model('operator')).$("[value='SUBTRACTION']").click();
            element(by.id('gobutton')).click();

            element(by.model('first')).sendKeys(11);
            element(by.model('second')).sendKeys(12);
            element(by.model('operator')).$("[value='MULTIPLICATION']").click();
            element(by.id('gobutton')).click();
        });
        it("Test Case 1.2 : Print Data - Row", function () {
            console.log('Test Case 1.2 : Print Data - Row');
            element(by.repeater('result in memory').row(0)).getText().then(function (text) {
                console.log(text);
            });
            element(by.repeater('result in memory').row(1)).getText().then(function (text) {
                console.log(text);
            });
            element(by.repeater('result in memory').row(2)).getText().then(function (text) {
                console.log(text);
            });
            element(by.repeater('result in memory').row(3)).getText().then(function (text) {
                console.log(text);
            });

        });
        it("Test Case 1.3 : Print Data - Column", function () {
            console.log('Test Case 1.3 : Print Data - Column');
            element.all(by.repeater('result in memory').column('result.timestamp')).getText().then(function (text) {
                console.log(text);
            });
        });
        it("Test Case 1.4 : Print Data - Table", function () {
            console.log('Test Case 1.3 : Print Data - Table');
            element.all(by.repeater('result in memory')).getText().then(function (rows) {
                console.log(rows);
            });
        });
        it("Test Case 1.5 : Print Data - Formatted Table", function () {
            console.log('Test Case 1.5 : Print Data - Formatted Table');
            element.all(by.repeater('result in memory')).getText().then(function (rows) {              
                for (i = 0; i < rows.length; i++) {
                    element(by.repeater('result in memory').row(i)).getText().then(function (text) { console.log(text); });                  
                }
            });              
        });
    });
});
