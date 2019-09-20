describe ("Promisses Overview",function(){

    it("Understanding Promisses",function(){
        browser.ignoreSynchronization=true;
        browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        for (i=1;i<=4;i++){
            element(by.xpath('//div[4]/input['+i+']')).click();  
            browser.sleep(3000);  
        }      
        browser.sleep(3000);     

    });
});