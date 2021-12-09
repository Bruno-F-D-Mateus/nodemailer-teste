const nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

let transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'brunodomingosmateus@gmail.com',
        pass: "trabalhando2"
    }
}));



var mailOptions = {
    from: 'brunodomingosmateus@gmail.com',
    to: 'brunofortunatomateus@gmail.com',
    subject: 'Testando Nodemailer',
    text: 'Funcionou'
}

let info = transporter.sendMail(mailOptions, (error, info) => {
    if(error)
        console.log(error)
    else
        console.log("Email sent: "+info.response);
})