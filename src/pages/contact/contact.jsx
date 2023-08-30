import React, { useRef } from "react";
import "./contact.css";
import { Phone, Clock, MapPin } from "phosphor-react";

export const ContactUs = () => {
  return (
    <div className="contact">
      <div className="header">
        <h1>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <a href=""></a>
      <div className="body">
        <div className="information">
          <div className="address">
            <MapPin size={28} weight="fill" color="black" />
            <div className="info">
              <h2>Address</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="phone">
            <Phone size={30} weight="fill" />
            <div className="info">
              <h2>Phone</h2>
              <p>
                Mobile: +&#40;84&#41; 546-6789 <br />
                Hotline: +&#40;84&#41; 456-6789
              </p>
            </div>
          </div>
          <div className="time">
            <Clock size={23} weight="fill" />
            <div className="info">
              <h2>Working Time</h2>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="form">
          <label>Your name</label>
          <input type="text" name="user_name" placeholder="Abc" />
          <label>Email address</label>
          <input type="email" name="user_email" placeholder="Abc@def.com" />
          <label>Subject</label>
          <input type="text" name="subject" placeholder="This is an optional" />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Hi! i&#8217;d like to ask about"
          />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
