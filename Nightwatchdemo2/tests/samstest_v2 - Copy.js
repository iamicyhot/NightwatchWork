
module.exports = {
'digg facebook login' : function (client) {

     var fbcredentials = require('./credentials.json');  
    
    client
      .url('http://digg.com')
      .waitForElementVisible('body', 1000)
      .click('.btn-login')
	  .waitForElementVisible('#btn-facebook-auth', 1000)
      .click('#btn-facebook-auth')
	  .waitForElementVisible('#email', 10000)
	  .setValue('#email', fbcredentials.username)
	  .setValue('#pass', fbcredentials.password)
	  .click("input[type='submit']")
	  .waitForElementVisible(".site-navigation__nav-item-label",6000)
	  .click("#js--nav-notifications")
	  .click("a[title='Log Out']");
 //     .window_handles(function(result) {
 //       client.assert.equal(result.value.length, 2, 'There should be two windows open.');
 //       var fbWindowHandle = result.value[1];
 //       client.switchWindow(fbWindowHandle);  
 //     })
 //     .waitForElementVisible('#facebook body', 1000)
 //     .setValue('input#email', fbcredentials.username)
 //     .setValue('input#pass', fbcredentials.password)
 //     .click('#loginbutton input')
 //     .window_handles(function(result) {
 //       client.assert.equal(result.value.length, 1, 'There should be only one window open.');  
 //       client.switchWindow(result.value[0]);  
 //     })
 //     .waitForElementVisible('#digg-header.authenticated', 3000)
 //     .end();
  }
}