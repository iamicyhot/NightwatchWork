var commonFunctions = require("../pages/commonFunctions.js");
module.exports = function(browser) {
	var common = new commonFunctions(browser);
	/*
	 * Test specific functions
	 */

	this.signIn = function() {
		common.clickUsingCss('input[value="Sign in"]');
		return browser;
	};

	this.inputUserName = function(value) {
		common.inputValue('input[name=username]', value);
		return browser;
	};
	this.inputPassword = function(value)	{
		common.inputValue('input[name=password]', value);
		return browser;
	};
	
	this.verifyUser = function()	{
		browser.getTitle(function(title) {
			//this.assert.equal(typeof title, 'string');
			if(title=="https://staging.swyftmedia.com/")
			{
				console.log("Swyft Admin is the user");
			}
			else if(title=="https://staging.swyftmedia.com/partner")
			{
				console.log("App Partner");
			}
			else
			{
				console.log("Didn't login successfully");
			}
			
   });
   return browser;
	}
};