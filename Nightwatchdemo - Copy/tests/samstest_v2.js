module.exports = {
					'beforeEach' : function(browser)	{
															browser.page.commonFunctions().goToApplication();
														},

  
					'test one' : function (browser) 	{
															var data = browser.globals;
															browser
																.page.homePage().inputUserName(data.username)
																.page.homePage().inputPassword(data.password)
																.page.homePage().signIn()
																.assert.elementNotPresent(data.warningText);
														},
					'after': function(browser)			{			
															browser
																.page.homePage().verifyUser()
																.end();
														}			
				};