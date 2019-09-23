/*

Installation and usage
Install Windows 10.
Download the correct Microsoft WebDriver server version for your build.

To find your correct build number: 
Go to Start > Settings > System > About and locate the number next to OS Build on the screen. 
This is your build number. Having the correct version of WebDriver for your build ensures 
it runs correctly.

*/

exports.config = {
  //  Can Execute Test without launching Webdriver
  //directConnect : true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    // 'browserName': 'firefox'
    'browserName': 'MicrosoftEdge',
    elementScrollBehavior: 1,
    nativeEvents: false
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  baseUrl: 'https://accounts.google.com/SignUp?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default',


  // Options to be set when Webdriver is started Manually 
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['edgespec.js']

  
};