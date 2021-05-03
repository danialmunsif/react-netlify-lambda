const { transporter } = require("./utils");

const form4 = require("./form4EmailTemplate");

exports.handler = async function (event, context) {
  await transporter.sendMail({
    from: '"Danial 👻" <dani.uol12@gmail.com>', // sender address
    to:
      "salmanhumayun6@gmail.com, danny@techtonex.com, zaaqib1@gmail.com, internetdreamz@gmail.com", // list of receivers
    subject: "Specter Finance Secured ✔", // Subject line
    html: form4(JSON.parse(event.body)), // html body
    attachments: [
      {
        // data uri as an attachment
        path: JSON.parse(event.body).signatureBaseImg,
      },
    ],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      event: JSON.parse(event.body),
    }),
  };
};
