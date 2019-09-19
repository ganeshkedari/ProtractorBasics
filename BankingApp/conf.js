exports.config = {
  //  Can Execute Test without launching Webdriver
  directConnect : true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    // 'browserName': 'firefox'
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // Options to be set when Webdriver is started Manually 
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['BankingApp.js']

  
};