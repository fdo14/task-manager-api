const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jack.nichols404@gmail.com',
    subject: 'Thanks for joining!',
    text: `Welcome to the app ${name}!`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jack.nichols404@gmail.com',
    subject: 'Wow!',
    text: `You're a real nerd, ${name}!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}
