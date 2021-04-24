/**
 *  Class for Calculator page
 */

import { ElementFinder } from "protractor";
import {element, by } from "protractor";

export class CalculatorPage{

// Elements -- with return type ElementFinder - in TypeScript it is mandator to give the elements retrun type
firstEditBox:ElementFinder;
secondEditBox:ElementFinder;
goButton:ElementFinder;
getNumberAdding:ElementFinder;
getAddedResults:ElementFinder;

constructor() {

    // Loctor - with there Identifiers 
    this.firstEditBox = element(by.model('first'));
    this.secondEditBox = element(by.model("second"));
    this.goButton = element(by.id('gobutton'));
    this.getNumberAdding = element(by.repeater("result in memory")).element(by.css("td:nth-child(2)"));
    this.getAddedResults = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));

  }
}



