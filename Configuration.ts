/**
 * ||###-- Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat --###||
 */

import { Config } from "protractor";

// An example configuration TypeScript first file
export let config: Config = {
    // This will fine for Chrome 
    directConnect: true, 
    // This is for IE and FireFox after starting server 
    //seleniumAddress: 'http://localhost:4444/wd/hub', 
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when protractor is called.
       specs: ['SpecFiles/CalculatorPageTest.js'
     // specs: ['SecPOMTwodifferntTC.js'
        ],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 31270
    }
  };
  
  