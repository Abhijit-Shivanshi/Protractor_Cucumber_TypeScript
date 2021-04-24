console.log("Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat");

import {browser} from "protractor";
import {element, by } from "protractor";

describe("First script from Protractor to Typescripts", ()=>{

it("Protracot TypeScript test case 1 ", async()=>{

	await browser.get("http://juliemr.github.io/protractor-demo/");
	await browser.manage().window().maximize();
	await element(by.model('first')).sendKeys("31");
	await element(by.model('second')).sendKeys("28");
	
	await element(by.id('gobutton')).click();
	browser.sleep(3000); // Shivanshi -- he yacha sathi Ki aaplyala pahayche aahey 

	element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text){
		console.log(" Number we are adding ---> " + text);
	})
	
	element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
		console.log(" Results of addition = > " + text);
		browser.sleep(3000);
	})
		
	})
	
})	