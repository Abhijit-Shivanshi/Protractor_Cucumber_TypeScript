console.log("Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat");

import { Given, When, Then } from "@cucumber/cucumber";
import { browser } from "protractor";
import { CalculatorPage } from "../PageObjects/CalculatorPage";
import chai from "chai";
let expect = chai.expect;

let calcuObj = new CalculatorPage();

 Given('I will navigate to the Calculator site', async() => {
 		await browser.get("http://juliemr.github.io/protractor-demo/");
		await browser.manage().window().maximize();
	 });


  When('I add two numbers {string} and {string}', async(string, string2) => {
        await calcuObj.firstEditBox.sendKeys(string);
		await calcuObj.secondEditBox.sendKeys(string2);
		await calcuObj.goButton.click();
    });


  Then('I check output displayed should be {string}', async(string) => {     
    await browser.sleep(3000); // Shivanshi -- he yacha sathi Ki aaplyala pahayche aahey 

	await calcuObj.getNumberAdding.getText().then(function (text) {
			console.log(" Number we are adding after configuration ---> " + text);
		})
 
	await calcuObj.getAddedResults.getText().then(async(text) => {
		console.log(" Results of addition after configuration  = > " + text);
		expect(text).to.equal(string);
		browser.sleep(3000);
	})
});

