var nodemailer = require('nodemailer');

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
    from: 'Fred Foo 👥 <akashbatman@gmail.com>', 
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