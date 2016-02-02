var common = function(browser) {
	var elementTimeout = 60 * 1000;
	/*
	 * Generic functions
	 */

	this.deleteCookies = function() {
		browser.deleteCookies();
		return browser;
	};

	this.end = function() {
		browser.end();
		return browser;
	}

	this.waitForElementPresent = function(locator) {
		browser.useCss().waitForElementPresent(locator, elementTimeout);
		return browser;
	};

	this.waitForElementPresentUsingXpath = function(locator) {
		browser.useXpath().waitForElementPresent(locator, elementTimeout);
		return browser;
	};

	this.goToApplication = function() {
		var self = this;
		self.deleteCookies();
		browser.windowMaximize().url('https://staging.swyftmedia.com');
		return browser;
	};

	this.goToApplicationWithUrl = function(url) {
		browser.windowMaximize().url(url);
		return browser;
	};

	this.switchToFrame = function(value) {
		browser.frame(value);
	};

	this.clickUsingXpath = function(value) {
		this.waitForElementPresentUsingXpath(value).click(value);
	};

	this.clickUsingCss = function(value) {
		this.waitForElementPresent(value).click(value);
	};

	this.inputValue = function(element, value) {
		this.waitForElementPresent(element).setValue(element, value);
	};
};
module.exports = common;