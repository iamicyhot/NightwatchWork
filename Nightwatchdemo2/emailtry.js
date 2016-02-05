var nodemailer = require('nodemailer');
var generator = require('xoauth2').createXOAuth2Generator({
    user: '{akashbatman@gmail}',
    clientId: '{226072221135-dr7n1sa41t6p19n17f535m2lo2ln562k.apps.googleusercontent.com}',
    clientSecret: '{8EZsNwT9uoWo95tQl7OdAWdn}',
    refreshToken: '{refresh-token}',
});

// create reusable transporter object using the default SMTP transport
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'akashbatman@gmail.com',
        pass: 'I@micyhot1'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
    from: '<akashbatman@gmail.com>', 
    to: 'akashbatman@gmail.com',
    subject: 'Hello',
    text: 'Hello world', 
    html: '<b>Hello world</b>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});