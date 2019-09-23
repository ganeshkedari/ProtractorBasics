describe('specs loaded to selenium', function() {
  it('should have the right capabilities', function() {
           browser.ignoreSynchronization = true;
    browser.get(browser.baseUrl);
    element(by.css('#FirstName')).sendKeys("Test");
    element(by.css('#LastName')).sendKeys("Test");
    element(by.css('#GmailAddress')).sendKeys("testingtesting1232343");
    element(by.css('#Passwd')).sendKeys("selenium1234");
    element(by.css('#PasswdAgain')).sendKeys("selenium1234");
    element(by.xpath("//*[@id='BirthMonth']/div[1]")).click();
    element(by.xpath("//*[@id=':1']")).click();
    element(by.xpath("//*[@id='BirthDay']")).sendKeys("01");
    element(by.css('#BirthYear')).sendKeys("1985");
     element(by.xpath("//*[@id='Gender']/div[1]")).click();
    element(by.xpath("//*[@id=':f']")).click();
    element(by.css('#RecoveryPhoneNumber')).sendKeys("9999994445");
    element(by.css('#RecoveryEmailAddress')).sendKeys("seleniumtesting@gmail.com");
    element(by.css("#submitbutton")).click();
    browser.sleep(2000);
    var elm = element(by.xpath("//*[@id='tos-text']/div[4]/p"));
    browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    browser.sleep(2000);
  
  });
});