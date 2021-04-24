"use strict";
/**
 * ||###-- Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat --###||
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
//import * as reporter from "cucumber-html-reporter"; // afte adding this getting error for options
var reporter = require('cucumber-html-reporter');
exports.config = {
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
        format: ['json:../Reports/cucumberJSON_RunReport.json'],
        require: [
            '../JSCompleFiles/StepDefinations/CalculatorStepDefi.js',
            '../JSCompleFiles/StepDefinations/BankFormStepDefi.js',
            '../JSCompleFiles/StepDefinations/hooks.js',
            '../JSCompleFiles/StepDefinations/Timeouts.js'
        ]
    },
    // Following code after runing all the scripts for generating the HTML report from JSON report which we have develp above 
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './Reports/cucumberJSON_RunReport.json',
            output: './Reports/PluginReport/cucumberPlugin_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUdGLG1HQUFtRztBQUNwRyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUVyQyxRQUFBLE1BQU0sR0FBVztJQUN4Qiw2QkFBNkI7SUFDN0IsYUFBYSxFQUFFLElBQUk7SUFFbkIsMkNBQTJDO0lBQzNDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixhQUFhLEVBQUUsUUFBUTtLQUN4QjtJQUVELDZCQUE2QjtJQUM3QixTQUFTLEVBQUUsUUFBUTtJQUVuQixvSEFBb0g7SUFDakgsS0FBSyxFQUFFLENBQUMsc0JBQXNCO1FBQ2hDLG1DQUFtQztLQUMvQjtJQUVELFlBQVksRUFBRTtRQUVqQiwyQkFBMkI7UUFDMUIsdUJBQXVCO1FBQ3BCLE1BQU0sRUFBQyxDQUFDLDZDQUE2QyxDQUFDO1FBRXRELE9BQU8sRUFBRTtZQUNQLHdEQUF3RDtZQUN4RCxzREFBc0Q7WUFDdEQsMkNBQTJDO1lBQzNDLDhDQUE4QztTQUMvQztLQUVMO0lBQ04sMEhBQTBIO0lBQ3JILFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDaEIsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUNBQXVDO1lBQ2pELE1BQU0sRUFBRSxtREFBbUQ7WUFDM0Qsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FFRixDQUFDIn0=