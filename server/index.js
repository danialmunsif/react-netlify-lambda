const express = require("express");
const serverless = require("serverless-http");
//yaha express ka pora ka pora framework app ma laa kar rakh raha ha
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const form1 = require("../functions/form1EmailTemplate");
const form2 = require("../functions/form2EmailTemplate");
const form3 = require("../functions/form3EmailTemplate");
const form4 = require("../functions/form4EmailTemplate");


const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ed93c0c435c631",
    pass: "d070064c76025d",
  },
});

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).json({
    msg: "TESTING",
  });
});

app.post("/api/form4", async (req, res) => {
  await transporter.sendMail({
    from: '"Danial 👻" <danialmunsif@gmail.com>', // sender address
    to: "Zaaqib, zaaqib1@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: form4(req.body), // html body
  });
  res.status(200).json({
    msg: "success",
  });
});

app.post("/api/form3", async (req, res) => {
  await transporter.sendMail({
    from: '"Danial 👻" <danialmunsif@gmail.com>', // sender address
    to: "Zaaqib, zaaqib1@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: form3(req.body), // html body
  });
  res.status(200).json({
    msg: "success",
  });
});

app.post("/api/form2", async (req, res) => {
  await transporter.sendMail({
    from: '"Danial 👻" <danialmunsif@gmail.com>', // sender address
    to: "Zaaqib, zaaqib1@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: form2(req.body), // html body
  });
  res.status(200).json({
    msg: "success",
  });
});

app.post("/api/form1", async (req, res) => {
  await transporter.sendMail({
    from: '"Danial 👻" <danialmunsif@gmail.com>', // sender address
    to: "Zaaqib, zaaqib1@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: form1(req.body), // html body
  });
  res.status(200).json({
    msg: "success",
  });
});

module.exports.handler  = serverless(app);
// app.listen(3001, () => {
//   console.log("Server is Running on Port 3001");
// });
