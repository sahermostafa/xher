import React from "react";
import PizzaLeft from "../assets/pexels-rodnae-productions-7464703.jpg";
import{Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";

function Contact() {
  return (
    <Container fluid >
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className="rightSide">
          <h1> Contact Us</h1>

          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Send Message</button>
          </form>
        </div>
      </div>
    </Container>
    
  );
}

export default Contact;