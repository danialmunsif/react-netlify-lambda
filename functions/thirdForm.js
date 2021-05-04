const { transporter } = require("./utils");

const form3 = require("./form3EmailTemplate");

exports.handler = async function (event, context) {
  try {
    let info = await transporter.sendMail({
      from: '"Danial 👻" <dani.uol12@gmail.com>', // sender address
      to:
        "salmanhumayun6@gmail.com, danny@techtonex.com, internetdreamz@gmail.com, zaaqib1@gmail.com", // list of receivers
      subject: "Specter Finance Unsecured ✔", // Subject line
      html: form3(JSON.parse(event.body)), // html body
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
        info: info,
      }),
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        error: error,
      }),
    };
  }
};
