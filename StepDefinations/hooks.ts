import { After, Before, Status } from "@cucumber/cucumber";
import { browser } from "protractor";

Before(function () {
   console.log("This is simple - Before - function ");
});

Before({tags: "@ShivaTag"}, function () {
     console.log(" Before function before tage @shivaTag ");
});

Before({tags: "@ShivaTag or @AnyTag"}, function () {
     console.log(" Before function before tage @shivaTag OR OR condition @anyTag ");
});

After(async function (scenario) {
   console.log("This is simple - After - function ");
   if(scenario.result.status === Status.FAILED){
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot, "image/png");
   }
  });
  
  After({tags: "@ShivaTag"}, function () {
     console.log(" After function for tage @shivaTag ");
  });
  
  After({tags: "@ShivaTag or @AnyTag"}, function () {
      console.log(" After function for tage @shivaTag OR OR condition @anyTag ");
  });
  