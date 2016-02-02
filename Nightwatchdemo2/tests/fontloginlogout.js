
module.exports = {
'fonts.com login' : function (client) {		
    
    client
		.url("http://howdy.fonts.com/")
		.waitForElementVisible(".ajax-has-dropdown a[href='/secure/sign-in']", 6000)
		.click(".ajax-has-dropdown a[href='/secure/sign-in']")
		//.waitForElementVisible("#be6a8461ab8c410b8b76ca666eb239a2 #UserName", 6000)
		.setValue("ul[class='ajax-dropdown signinform'] li[data-action='target'] #member-signin-section #hovered-member-signin-section form[action='https://howdy.fonts.com/other/customer/signin'] #UserName", "0@bla.com")
		//.setValue("#be6a8461ab8c410b8b76ca666eb239a2 #Password", "bla@bla.com")
		//.click("#be6a8461ab8c410b8b76ca666eb239a2 input[value='Sign In']")
		//.waitForElementVisible("a[href='/account']", 10000)
		//.saveScreenshot("./screenshots/signIn.png")
		//.click("a[href='/account']")
		//.click(".ajax-dropdown.accountmenu a[href='/customer/logout']")
		//.saveScreenshot("./screenshots/logout.png")
		//error message : ".error.user-message>p"
	
		
  }
}