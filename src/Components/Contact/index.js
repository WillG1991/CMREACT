import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container } from "@mui/system";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c83o7rj', 'template_4405pys', form.current, 'M_S-taOTVa5CPgQ1y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
      <section id="Contact">
        <h1 className="gellatio-font">Contact Me</h1>
    <Container className="contactFormContainer">
      <form className="contactFormForm" ref={form} onSubmit={sendEmail}>
        <div className="contactInputs">
      <label className="lead">Your Name</label>
      <br></br>
      <input type="text" name="user_name" />
      <br></br>
      <label className="lead">Your Email/Phone Number</label>
      <br></br>
      <input type="email" name="user_email" />
      <br></br>
      <label className="lead">Your Message</label>
      <br></br>
      <textarea name="message" />
      <br></br>
      <input className="contactSubmitButton" type="submit" value="Submit" />
      </div>
    </form>
    </Container>
    </section>
    );
  }
  
  export default Contact;