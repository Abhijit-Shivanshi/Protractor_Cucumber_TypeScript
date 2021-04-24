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
const CalculatorPage_1 = require("../PageObjects/CalculatorPage");
describe("First script from Protractor to Typescripts", () => {
    it("Protracot TypeScript test case 1 ", () => __awaiter(void 0, void 0, void 0, function* () {
        let calcuObj = new CalculatorPage_1.CalculatorPage();
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield protractor_1.browser.manage().window().maximize();
        yield calcuObj.firstEditBox.sendKeys("31");
        yield calcuObj.secondEditBox.sendKeys("28");
        yield calcuObj.goButton.click();
        protractor_1.browser.sleep(3000); // Shivanshi -- he yacha sathi Ki aaplyala pahayche aahey 
        calcuObj.getNumberAdding.getText().then(function (text) {
            console.log(" Number we are adding after configuration ---> " + text);
        });
        calcuObj.getAddedResults.getText().then(function (text) {
            console.log(" Results of addition after configuration  = > " + text);
            protractor_1.browser.sleep(3000);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvclBhZ2VUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlY0ZpbGVzL0NhbGN1bGF0b3JQYWdlVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQztBQUVuRiwyQ0FBcUM7QUFFckMsa0VBQStEO0FBRS9ELFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFHLEVBQUU7SUFFNUQsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtRQUVsRCxJQUFJLFFBQVEsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztRQUVwQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwREFBMEQ7UUFFL0UsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUE7UUFFRixRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNyRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSJ9