"use client"
import React, { useState, useEffect } from "react";

const Contact = () => {
    const [status, setStatus] = useState("submit");
    const [messageSend, setMessageSend] = useState(
      "Si vous avez des remarques, des idées à nous suggérer ou des erreurs à nous signaler, nous serons ravis de vous écouter."
    );
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setStatus("sending...");
      const { name, email, subject, message } = e.target.elements;
  
      let details = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };
  
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("submit");
      /* let result = await response.json(); */
      setMessageSend("Message envoyer");
      //alert(result.status)
  
      e.target.reset();
  
      setTimeout(() => {
        setMessageSend(
          "Si vous avez des remarques, des idées à nous suggérer ou des erreurs à nous signaler, nous serons ravis de vous écouter."
        );
      }, 3000);
    };
  
  
    return (
      <>
        <div className="container-form">
          <h1 className="title-contact">Contactez-nous !</h1>
          <p className="description-contact"> {messageSend} </p>
  
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="input">
                <input type="text" id="name" placeholder="Nom" required />
              </div>
              <div className="input">
                <input type="text" id="subject" placeholder="Sujet" required />
              </div>
              <div className="input">
                <input type="email" id="email" placeholder="email" required />
              </div>
              <div className="textarea">
                <textarea id="message" placeholder="Message" />
              </div>
              <div className="contact-submit">
                <button type="submit">{status}</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  export default Contact