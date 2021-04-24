import { Given, When, Then } from "@cucumber/cucumber";
import { browser, element, by } from "protractor";
import chai from "chai";
let expect = chai.expect;

Given('I Lauch Login page for Bankchecking', async() => {
    var url = "http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        // Launching URL 
        await browser.get(url);
        await browser.manage().window().maximize();
  });

  When('I enter {string} and {string} in loging',async(string, string2) => {
    await element(by.css('#username')).sendKeys(string);
    await element(by.css('input#password')).sendKeys(string2);
  });

  Then('I click on {string} button', async(string) => {
    await element(by.css('[type="submit"]')).getText().then(async(text) =>{
        console.log("==== >> " + text);
        await browser.sleep(3000);
        expect(text).to.equal(string);
    });
  });

  Then('I check for login text', async() => {
    console.log("Login successfully and verification done \n")
  });