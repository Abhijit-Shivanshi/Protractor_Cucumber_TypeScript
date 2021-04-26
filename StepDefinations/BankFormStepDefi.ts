import { Given, When, Then } from "@cucumber/cucumber";
import { browser, element, by } from "protractor";
import chai from "chai";
let expect = chai.expect;
import { BankPage } from "../PageObjects/BankFormPage";

let bankObj = new BankPage();

Given('I Lauch Login page for Bankchecking', async() => {
    var url = "http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        // Launching URL 
        await browser.get(url);
        await browser.manage().window().maximize();
  });

  When('I enter {string} and {string} in loging',async(string, string2) => {
    await bankObj.userName.sendKeys(string);
    await bankObj.passWord.sendKeys(string2);
  });

  Then('I click on {string} button', async(string) => {
    await bankObj.submitButton.getText().then(async(text) =>{
        console.log("==== >> " + text);
        await browser.sleep(3000);
        expect(text).to.equal(string);
    });
  });

  Then('I check for login text', async() => {
    console.log("Login successfully and verification done \n")
  });