/**
 *  Class for BankForm page
 */

 import { ElementFinder } from "protractor";
 import {element, by } from "protractor";
 
 export class BankPage{
 
 // Elements -- with return type ElementFinder - in TypeScript it is mandator to give the elements retrun type
 userName:ElementFinder;
 passWord:ElementFinder;
 submitButton:ElementFinder;

 
 constructor() {
 
     // Loctor - with there Identifiers 
     this.userName = element(by.css('#username'));
     this.passWord = element(by.css('input#password'));
     this.submitButton = element(by.css('[type="submit"]'));
      
   }
 }