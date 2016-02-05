module.exports = {
'fonts.com user creation' : function (client) {
		var i = 0;
		var fs = require('fs');
		var email;
		var password;
		//var stream = fs.createWriteStream("my_file.xls");
		fs.appendFile("my_file.xls", "EMAILS" +"\t" + "PASSWORD"+"\n");
    for(i=0;i<10;i++)
	{		
		email= (i+"@bla.com");
		password=email;
    
    client
		.url("http://howdy.fonts.com/")
		.waitForElementVisible("a[href='/secure/become-a-member']", 6000)
		.click("a[href='/secure/become-a-member']")
		.waitForElementVisible("#Email", 6000)
		.setValue("#Email", email)
		.setValue("form.create-account-form input#Password", "bla@bla.com")
		.setValue("#ConfirmPassword", "bla@bla.com")
		.click("input[value='Create Account']")
		.saveScreenshot("./screenshots"+i+".png")
		fs.appendFile("my_file.xls", email+"\t"+password+"\n")
	}
		
  }
}