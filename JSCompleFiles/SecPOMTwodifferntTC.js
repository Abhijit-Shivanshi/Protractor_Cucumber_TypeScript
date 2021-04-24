"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat");
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe(" Two modules -Submit button check and Filter option check ", () => __awaiter(void 0, void 0, void 0, function* () {
    // Check for the Login Applicatio and get the text of submit button
    it(" Check for the Login Applicatio and get the text of submit button ", () => __awaiter(void 0, void 0, void 0, function* () {
        var url = "http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        // Launching URL 
        yield protractor_1.browser.get(url);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_2.element(protractor_2.by.css('#username')).sendKeys("Shiva");
        //browser.sleep(4000);
        yield protractor_2.element(protractor_2.by.css('input#password')).sendKeys("Shiva");
        //browser.sleep(4000);
        yield protractor_2.element(protractor_2.by.css('[type="submit"]')).getText().then(function (text) {
            console.log("==== >> " + text);
            expect(text).toContain("Login");
        });
        //browser.sleep(4000);
    }));
    //  Check Search Filter operations
    it(" Check Search Filter operations ", () => __awaiter(void 0, void 0, void 0, function* () {
        var url = "http://www.globalsqa.com/angularJs-protractor/SearchFilter/";
        // Launching URL 
        yield protractor_1.browser.get(url);
        yield protractor_1.browser.manage().window().maximize();
        // Select first edit box and enter details 
        yield protractor_2.element(protractor_2.by.model("filterTxn.payee.name")).click();
        yield protractor_2.element(protractor_2.by.model("filterTxn.payee.name")).sendKeys("InternetBill");
        //browser.sleep(2000);
        // Select from drop down First
        yield protractor_2.element(protractor_2.by.model("filterTxn.account")).$('[value="2"]').click();
        //browser.sleep(3000);
        // select second drop down 
        yield protractor_2.element(protractor_2.by.model("filterTxn.txnType")).element(protractor_2.by.css("[value='INCOME']")).click();
        //browser.sleep(3000);
        expect(protractor_1.browser.getCurrentUrl()).toContain("angularJs-protractor");
        expect(protractor_1.browser.getCurrentUrl()).toEqual("https://www.globalsqa.com/angularJs-protractor/SearchFilter/");
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjUE9NVHdvZGlmZmVybnRUQy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1NlY1BPTVR3b2RpZmZlcm50VEMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7QUFFbkYsMkNBQW1DO0FBQ25DLDJDQUF3QztBQUV4QyxRQUFRLENBQUMsNERBQTRELEVBQUUsR0FBTyxFQUFFO0lBRTVFLG1FQUFtRTtJQUNsRSxFQUFFLENBQUMsb0VBQW9FLEVBQUUsR0FBTyxFQUFFO1FBQy9FLElBQUksR0FBRyxHQUFHLGtGQUFrRixDQUFDO1FBQzdGLGlCQUFpQjtRQUNqQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxzQkFBc0I7UUFFdEIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxzQkFBc0I7UUFFdEIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILHNCQUFzQjtJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBR0gsa0NBQWtDO0lBQ2xDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFPLEVBQUU7UUFDaEQsSUFBSSxHQUFHLEdBQUcsNkRBQTZELENBQUM7UUFDeEUsaUJBQWlCO1FBQ2pCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLDJDQUEyQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RSxzQkFBc0I7UUFFdEIsOEJBQThCO1FBQzlCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEUsc0JBQXNCO1FBRXRCLDJCQUEyQjtRQUMzQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pGLHNCQUFzQjtRQUV0QixNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7SUFDeEcsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILENBQUMsQ0FBQSxDQUFDLENBQUMifQ==