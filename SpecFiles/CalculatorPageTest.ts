console.log("Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat");

import { browser } from "protractor";
import { element, by } from "protractor";
import { CalculatorPage } from "../PageObjects/CalculatorPage";

describe("First script from Protractor to Typescripts", () => {

	it("Protracot TypeScript test case 1 ", async () => {

		let calcuObj = new CalculatorPage();

		await browser.get("http://juliemr.github.io/protractor-demo/");
		await browser.manage().window().maximize();

		await calcuObj.firstEditBox.sendKeys("31");
		await calcuObj.secondEditBox.sendKeys("28");
		await calcuObj.goButton.click();

		browser.sleep(3000); // Shivanshi -- he yacha sathi Ki aaplyala pahayche aahey 

		calcuObj.getNumberAdding.getText().then(function (text) {
			console.log(" Number we are adding after configuration ---> " + text);
		})

		calcuObj.getAddedResults.getText().then(function (text) {
			console.log(" Results of addition after configuration  = > " + text);
			browser.sleep(3000);
		})
	})
})

