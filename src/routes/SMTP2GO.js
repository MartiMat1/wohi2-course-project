
const smtp2Goapi = require("@api/smtp2goapi");
smtp2Goapi.auth(process.env.SMTP2GO_API_KEY);

//SEND VERIFICATION EMAIL TO USER
function sendVerificationEmail(receiver,token){

    const link = `${process.env.APP_URL}/api/auth/verify/${token}`;
    return smtp2Goapi.sendStandardEmail({
        fastaccept: true,
        sender: 'martimat@uef.fi',
        to: [receiver],
        subject: "Confirm your email",
        text_body: `Confirm your email by clicking the link: ${link}`,
        html_body:
            `<h2>Welcome!</h2>
            <p>Confirm your email by clicking the link below:</p>
            <a href="${link}">Confirm</a>`
  });
}

module.exports = sendVerificationEmail;