const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const router = express.Router();
const app = require("./app");
const contactEmail = nodeMailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "contact.dzairhistory@gmail.com",
    pass: "pjeayqokvsvnmvud",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send !");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;

  const mail = {
    from: name,
    to: "contact.dzairhistory@gmail.com",
    subject: subject,
    html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;