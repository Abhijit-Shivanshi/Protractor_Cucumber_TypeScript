"use strict";
/**
 * ||###-- Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat --###||
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration TypeScript first file
exports.config = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7QUFJSCxpREFBaUQ7QUFDdEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsNkJBQTZCO0lBQzdCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLG9EQUFvRDtJQUNwRCxtREFBbUQ7SUFFbkQsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLGFBQWEsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsNENBQTRDO0lBQzVDLFNBQVMsRUFBRSxTQUFTO0lBRXBCLHlGQUF5RjtJQUN0RixLQUFLLEVBQUUsQ0FBQyxpQ0FBaUM7UUFDM0MsbUNBQW1DO0tBQy9CO0lBRUwsbUNBQW1DO0lBQ25DLGVBQWUsRUFBRTtRQUNmLHNCQUFzQixFQUFFLEtBQUs7S0FDOUI7Q0FDRixDQUFDIn0=