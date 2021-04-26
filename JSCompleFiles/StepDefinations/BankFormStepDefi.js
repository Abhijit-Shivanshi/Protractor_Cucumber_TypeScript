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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
const BankFormPage_1 = require("../PageObjects/BankFormPage");
let bankObj = new BankFormPage_1.BankPage();
cucumber_1.Given('I Lauch Login page for Bankchecking', () => __awaiter(void 0, void 0, void 0, function* () {
    var url = "http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
    // Launching URL 
    yield protractor_1.browser.get(url);
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.When('I enter {string} and {string} in loging', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield bankObj.userName.sendKeys(string);
    yield bankObj.passWord.sendKeys(string2);
}));
cucumber_1.Then('I click on {string} button', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield bankObj.submitButton.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("==== >> " + text);
        yield protractor_1.browser.sleep(3000);
        expect(text).to.equal(string);
    }));
}));
cucumber_1.Then('I check for login text', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Login successfully and verification done \n");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua0Zvcm1TdGVwRGVmaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbmF0aW9ucy9CYW5rRm9ybVN0ZXBEZWZpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFrRDtBQUNsRCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6Qiw4REFBdUQ7QUFFdkQsSUFBSSxPQUFPLEdBQUcsSUFBSSx1QkFBUSxFQUFFLENBQUM7QUFFN0IsZ0JBQUssQ0FBQyxxQ0FBcUMsRUFBRSxHQUFRLEVBQUU7SUFDbkQsSUFBSSxHQUFHLEdBQUcsa0ZBQWtGLENBQUM7SUFDekYsaUJBQWlCO0lBQ2pCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2pELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUMsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDdEUsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBTSxNQUFNLEVBQUUsRUFBRTtJQUNqRCxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFFLEVBQUU7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFRLEVBQUU7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzVELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==