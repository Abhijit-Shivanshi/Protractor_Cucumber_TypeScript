/**
 * ||###-- Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat --###||
 */

 import { Config } from "protractor";
 //import * as reporter from "cucumber-html-reporter"; // afte adding this getting error for options
var reporter = require('cucumber-html-reporter');

 export let config: Config = {
     // This will fine for Chrome 
     directConnect: true, 

     // path relative to the current config file
     frameworkPath: require.resolve('protractor-cucumber-framework'),

     // Capabilities to be passed to the webdriver instance.
     capabilities: {
       'browserName': 'chrome'
     },
   
     // Framework to use - Custom 
     framework: 'custom',
   
     // Shivanshi - khali we need to give the path of feature file kaaran we are executing the feature file not spec file
        specs: ['../Feature/*.feature'
      // specs: ['SecPOMTwodifferntTC.js'
         ],

         cucumberOpts: {
           
      // require step definitions
       //   tags: "@ShivaTag",
          format:['json:../Reports/cucumberJSON_RunReport.json'],
          
          require: [
            '../JSCompleFiles/StepDefinations/CalculatorStepDefi.js',
            '../JSCompleFiles/StepDefinations/BankFormStepDefi.js',
            '../JSCompleFiles/StepDefinations/hooks.js', 
            '../JSCompleFiles/StepDefinations/Timeouts.js'  
          ]
          
     },   
// Following code after runing all the scripts for generating the HTML report from JSON report which we have develp above 
     onComplete: () =>{
      var options = {
        theme: 'bootstrap',
        jsonFile: './Reports/cucumberJSON_RunReport.json',
        output: './Reports/PluginReport/cucumberPlugin_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    }

  };

  

   