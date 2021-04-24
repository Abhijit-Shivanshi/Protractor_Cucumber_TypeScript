console.log("Om tat purushaya vidmahe mahadevaya dhimahi tanno rudra prachodayat");

import {browser} from "protractor";
import {element, by } from "protractor";

describe(" Two modules -Submit button check and Filter option check ", async()=> {

    // Check for the Login Applicatio and get the text of submit button
     it(" Check for the Login Applicatio and get the text of submit button ", async()=> { 
        var url = "http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        // Launching URL 
        await browser.get(url);
        await browser.manage().window().maximize();
        
        await element(by.css('#username')).sendKeys("Shiva");
        //browser.sleep(4000);
        
        await element(by.css('input#password')).sendKeys("Shiva");
        //browser.sleep(4000);
        
        await element(by.css('[type="submit"]')).getText().then(function(text){
            console.log("==== >> " + text);
            expect(text).toContain("Login");
        });
        //browser.sleep(4000);
    });
     
     
    //  Check Search Filter operations
    it(" Check Search Filter operations ", async()=>{
    var url = "http://www.globalsqa.com/angularJs-protractor/SearchFilter/";
    // Launching URL 
    await browser.get(url);
    await browser.manage().window().maximize();
    
    // Select first edit box and enter details 
    await element(by.model("filterTxn.payee.name")).click();
    await element(by.model("filterTxn.payee.name")).sendKeys("InternetBill");
    //browser.sleep(2000);
    
    // Select from drop down First
    await element(by.model("filterTxn.account")).$('[value="2"]').click();
    //browser.sleep(3000);
    
    // select second drop down 
    await element(by.model("filterTxn.txnType")).element(by.css("[value='INCOME']")).click();
    //browser.sleep(3000);
    
    expect(browser.getCurrentUrl()).toContain("angularJs-protractor");
      
    expect(browser.getCurrentUrl()).toEqual("https://www.globalsqa.com/angularJs-protractor/SearchFilter/");
    });
     
    });
    