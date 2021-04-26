"use strict";
/**
 *  Class for BankForm page
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankPage = void 0;
const protractor_1 = require("protractor");
class BankPage {
    constructor() {
        // Loctor - with there Identifiers 
        this.userName = protractor_1.element(protractor_1.by.css('#username'));
        this.passWord = protractor_1.element(protractor_1.by.css('input#password'));
        this.submitButton = protractor_1.element(protractor_1.by.css('[type="submit"]'));
    }
}
exports.BankPage = BankPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua0Zvcm1QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvQmFua0Zvcm1QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBR0YsMkNBQXdDO0FBRXhDLE1BQWEsUUFBUTtJQVFyQjtRQUVJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFekQsQ0FBQztDQUNGO0FBaEJELDRCQWdCQyJ9