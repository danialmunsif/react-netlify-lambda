const { transporter } = require("./utils");

const form2 = require("./form2EmailTemplate");

exports.handler = async function (event, context) {
  try {
    let info = await transporter.sendMail({
      from: '"Danial 👻" <dani.uol12@gmail.com>', // sender address
      to: "salmanhumayun6@gmail.com, internetdreamz@gmail.com", // list of receivers
      subject: "Specter Finance ✔", // Subject line
      html: form2(JSON.parse(event.body)), // html body
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
