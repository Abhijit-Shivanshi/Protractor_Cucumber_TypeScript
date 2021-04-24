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
console.log("Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat");
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const CalculatorPage_1 = require("../PageObjects/CalculatorPage");
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
let calcuObj = new CalculatorPage_1.CalculatorPage();
cucumber_1.Given('I will navigate to the Calculator site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calcuObj.firstEditBox.sendKeys(string);
    yield calcuObj.secondEditBox.sendKeys(string2);
    yield calcuObj.goButton.click();
}));
cucumber_1.Then('I check output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000); // Shivanshi -- he yacha sathi Ki aaplyala pahayche aahey 
    yield calcuObj.getNumberAdding.getText().then(function (text) {
        console.log(" Number we are adding after configuration ---> " + text);
    });
    yield calcuObj.getAddedResults.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(" Results of addition after configuration  = > " + text);
        expect(text).to.equal(string);
        protractor_1.browser.sleep(3000);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvclN0ZXBEZWZpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluYXRpb25zL0NhbGN1bGF0b3JTdGVwRGVmaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQztBQUVuRixpREFBdUQ7QUFDdkQsMkNBQXFDO0FBQ3JDLGtFQUErRDtBQUMvRCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLFFBQVEsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUVuQyxnQkFBSyxDQUFDLHdDQUF3QyxFQUFFLEdBQVEsRUFBRTtJQUN4RCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDaEUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDbkUsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0wsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLENBQU0sTUFBTSxFQUFFLEVBQUU7SUFDbEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDBEQUEwRDtJQUV4RixNQUFNLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFBO0lBRUgsTUFBTSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLElBQUksRUFBRSxFQUFFO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUMifQ==