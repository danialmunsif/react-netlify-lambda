const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "ed93c0c435c631",
//     pass: "d070064c76025d",
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass:
      "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",
  },
});
module.exports = { transporter };
