describe("Test Suit : Calculator App", function(){
    describe("Test Group 1 : Addition Basic",function(){
        beforeEach(function(){
            console.log("############## [ Launching Page ################")
            browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        });
        
        afterEach(function(){
            console.log("############## [ Test Completed ################")
            // browser.sleep(3000);
        });

        it("Test Case 1.1 : Basic Sum (1+1=2)",function(){
            // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
            
            element(by.model('first')).sendKeys("1");
            element(by.model('second')).sendKeys("1");
            element(by.id('gobutton')).click();
            // element(by.binding('latest')).getText().then(function(text){
            //     console.log("Result :"+text);                
            // });         
            
            var expectedText = element(by.binding('latest')).getText();
            expectedText.then(function(text){
                console.log("Result :"+text);
                expect(parseInt(text)).toBe(2);
            });
        });

        it("Test Case 1.2 : Basic Sum (1+1!=3)",function(){
            // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
            element(by.model('first')).sendKeys("1");
            element(by.model('second')).sendKeys("1");
            element(by.id('gobutton')).click();
            // element(by.binding('latest')).getText().then(function(text){
            //     console.log("Result :"+text);
            // });
            var expectedText = element(by.binding('latest')).getText();
            expectedText.then(function(text){
                console.log("Result :"+text);
                expect(parseInt(text)).not.toBe(3);
            }); 
        });

        it("Test Case 1.3: Basic Sum (1+1=3)",function(){
                // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
                element(by.model('first')).sendKeys("1");
                element(by.model('second')).sendKeys("1");
                element(by.id('gobutton')).click();
            //     element(by.binding('latest')).getText().then(function(text){
            //         console.log("Result :"+text);
            // }); 
                var expectedText = element(by.binding('latest')).getText();
                expectedText.then(function(text){
                    console.log("Result :"+text);
                    expect(parseInt(text)).toBe(3);
                });
        }); 
    });
    describe("Test Group 2 : Addition optimized",function(){
        var expectedText;
        beforeEach(function(){
            console.log("############## [ Launching Page and Performning Action ################")
            browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
            element(by.model('first')).sendKeys("1");
            element(by.model('second')).sendKeys("1");
            element(by.id('gobutton')).click();
            expectedText = element(by.binding('latest')).getText();
        });
        it("Test Case 2.1 : Basic Sum (1+1=2)",function(){
            expectedText.then(function(text){
                expect(parseInt(text)).toBe(2);
            });
        });
        it("Test Case 2.2 : Basic Sum (1+1!=3)",function(){
            expectedText.then(function(text){
                expect(parseInt(text)).not.toBe(3);
            });
        });
        it("Test Case 2.3 : Basic Sum (1+1=3)",function(){
            expectedText.then(function(text){
                expect(parseInt(text)).toBe(3);
            });
        });
    });
});