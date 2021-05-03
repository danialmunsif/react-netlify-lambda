const { transporter } = require("./utils");

const form1 = require("./form1EmailTemplate");

exports.handler = async function (event, context) {
  let info = await transporter.sendMail({
    from: '"Danial 👻" <dani.uol12@gmail.com>', // sender address
    to:
      "salmanhumayun6@gmail.com, danny@techtonex.com, internetdreamz@gmail.com, zaaqib1@gmail.com", // list of receivers
    subject: "Scribble Finance ✔", // Subject line
    html: form1(JSON.parse(event.body)), // html body
  });
  console.log("FirstForm Handler info ==>", info);
  return {
    statusCode: 200,
    body: JSON.stringify({
      event: JSON.parse(event.body),
    }),
  };
};
