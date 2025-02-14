// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "aftabalamdlm@gmail.com",
//     pass: "585364115531",
//   },
// });

const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendMail = async (receiverEmail, subject, body) => {
  const msg = {
    from: process.env.EMAIL,
    to: receiverEmail,
    subject: subject,
    html: body,
  };

  await sgMail.send(msg);
};
