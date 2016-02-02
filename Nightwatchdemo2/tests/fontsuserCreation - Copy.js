
module.exports = {
'fonts.com user creation' : function (client) {
		var i = 0;
    for(i=0;i<10;i++)
	{		
    
    client
		.url("http://www.fonts.com/")
		.waitForElementVisible("a[href='/secure/become-a-member']", 6000)
		.click("a[href='/secure/become-a-member']")
		.waitForElementVisible("#Email", 6000)
		.setValue("#Email", i+"@bla.com")
		.setValue("form.create-account-form input#Password", "bla@bla.com")
		.setValue("#ConfirmPassword", "bla@bla.com")
		.click("input[value='Create Account']")
		.saveScreenshot("./screenshots"+i+".png")
		//error message : ".error.user-message>p"
	}
		
  }
}