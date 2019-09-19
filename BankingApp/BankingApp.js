describe("banking App Automation", function () {

    it("Login Validation", function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.buttonText('Customer Login')).click();
    //    browser.sleep(3000);
          expect(element(by.id('userSelect')).isPresent()).toBe(true);   
            element.all(by.css("#userSelect option")).then(function(items){
            console.log("######################## [Printing Values from dropdown] ########################")
            console.log("Length :"+items.length);
            for(i=0;i<items.length;i++)
            {
               items[i].getText().then(function(text){
                    console.log(text);
                });
            //    items[i].getAttribute("value").then( function(text){
            //         console.log(text);
            //     });
                
            }
            console.log("######################## [Select user from Dropdown] ########################")            
            /****************  To be Tested
                expect(element(by.model('custId')).$("[value='2']").getText().toBe("Harry"));           
           */
           // element(by.model('custId')).element(by.css("[value='2']")).click(); 
           element(by.model('custId')).$("[value='2']").click();
            browser.sleep(3000);
        });  
    });
});