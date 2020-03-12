const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'arifabegam.mujawar@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app,${name}. Let me know how you get along with the app.`
  })
}


const CancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'arifabegam.mujawar@gmail.com',
    subject:'Sorry to see you go',
    text: `Sorry to see you go, How can we have you back ${name}`
  })
}
module.exports = {
  sendWelcomeEmail,
  CancelEmail
}