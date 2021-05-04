const { transporter } = require("./utils");

const form2 = require("./form2EmailTemplate");

exports.handler = async function (event, context) {
  await transporter.sendMail({
    from: '"Danial 👻" <dani.uol12@gmail.com>', // sender address
    to: "salmanhumayun6@gmail.com, danny@techtonex.com, zaaqib1@gmail.com", // list of receivers
    subject: "Specter Finance ✔", // Subject line
    html: form2(JSON.parse(event.body)), // html body
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      event: JSON.parse(event.body),
    }),
  };
};
