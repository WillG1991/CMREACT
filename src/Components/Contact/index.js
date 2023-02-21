import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Container } from "@mui/system";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_phone: "",
    user_email: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_c83o7rj', 'template_4405pys', form.current, 'M_S-taOTVa5CPgQ1y')
      .then((result) => {
        console.log(result.text);
        setFormValues({
          user_name: "",
          user_phone: "",
          user_email: "",
          message: "",
        });
        window.alert("Thank you so much for your message, we will contact you in 48 hours!");
      }, (error) => {
        console.log(error.text);
        window.alert("Message failed to send");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <section id="Contact">
      <h1 className="gellatio-font">Contact Me</h1>
      <Container className="contactFormContainer">
        <form className="contactFormForm" ref={form} onSubmit={sendEmail}>
          <div className="contactInputs">
            <label className="lead">Name</label>
            <br></br>
            <input type="text" name="user_name" value={formValues.user_name} onChange={handleChange} />
            <br></br>
            <label className="lead">Phone</label>
            <br></br>
            <input type="text" name="user_phone" value={formValues.user_phone} onChange={handleChange} />
            <br></br>
            <label className="lead">Email</label>
            <br></br>
            <input type="text" name="user_email" value={formValues.user_email} onChange={handleChange} />
            <br></br>
            <label className="lead">Message</label>
            <br></br>
            <textarea name="message" value={formValues.message} onChange={handleChange} />
            <br></br>
            <input className="contactSubmitButton" type="submit" value="Submit" />
            {message && <p>{"Thank you so much for your message, we will contact you in 48 hours!"}</p>}
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Contact;




