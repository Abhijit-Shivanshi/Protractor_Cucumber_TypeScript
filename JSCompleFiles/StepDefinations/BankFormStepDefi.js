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
cucumber_1.Given('I Lauch Login page for Bankchecking', () => __awaiter(void 0, void 0, void 0, function* () {
    var url = "http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
    // Launching URL 
    yield protractor_1.browser.get(url);
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.When('I enter {string} and {string} in loging', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css('#username')).sendKeys(string);
    yield protractor_1.element(protractor_1.by.css('input#password')).sendKeys(string2);
}));
cucumber_1.Then('I click on {string} button', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css('[type="submit"]')).getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("==== >> " + text);
        yield protractor_1.browser.sleep(3000);
        expect(text).to.equal(string);
    }));
}));
cucumber_1.Then('I check for login text', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Login successfully and verification done \n");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua0Zvcm1TdGVwRGVmaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbmF0aW9ucy9CYW5rRm9ybVN0ZXBEZWZpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFrRDtBQUNsRCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixnQkFBSyxDQUFDLHFDQUFxQyxFQUFFLEdBQVEsRUFBRTtJQUNuRCxJQUFJLEdBQUcsR0FBRyxrRkFBa0YsQ0FBQztJQUN6RixpQkFBaUI7SUFDakIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBQyxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN0RSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBTSxNQUFNLEVBQUUsRUFBRTtJQUNqRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFFLEVBQUU7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFRLEVBQUU7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzVELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==