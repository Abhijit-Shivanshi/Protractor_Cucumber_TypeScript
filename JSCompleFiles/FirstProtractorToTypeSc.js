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
describe("First script from Protractor to Typescripts", () => {
    it("Protracot TypeScript test case 1 ", () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_2.element(protractor_2.by.model('first')).sendKeys("31");
        yield protractor_2.element(protractor_2.by.model('second')).sendKeys("28");
        yield protractor_2.element(protractor_2.by.id('gobutton')).click();
        protractor_1.browser.sleep(3000); // Shivanshi -- he yacha sathi Ki aaplyala pahayche aahey 
        protractor_2.element(protractor_2.by.repeater("result in memory")).element(protractor_2.by.css("td:nth-child(2)")).getText().then(function (text) {
            console.log(" Number we are adding ---> " + text);
        });
        protractor_2.element(protractor_2.by.repeater("result in memory")).element(protractor_2.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(" Results of addition = > " + text);
            protractor_1.browser.sleep(3000);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyc3RQcm90cmFjdG9yVG9UeXBlU2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9GaXJzdFByb3RyYWN0b3JUb1R5cGVTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQztBQUVuRiwyQ0FBbUM7QUFDbkMsMkNBQXdDO0FBRXhDLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFFLEVBQUU7SUFFNUQsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQU8sRUFBRTtRQUVoRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwREFBMEQ7UUFFL0Usb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN2RyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFBO1FBRUYsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN2RyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2hELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBRUYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQyxDQUFBIn0=