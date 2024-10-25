import React, { useState } from "react";
import { database } from "../firebaseConfig";
import { ref, push, set } from "firebase/database";
import "./Popup.css";

function Popup({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const messagesRef = ref(database, "messages");
      const newMessageRef = push(messagesRef);

      await set(newMessageRef, {
        name: name,
        email: email,
        contact: contact,
        message: message,
      });

      // Clear the form fields
      setName("");
      setEmail("");
      setContact("");
      setMessage("");

      // Optionally, display a success message to the user
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle the error appropriately (e.g., display an error message)
    }
  };

  return (
    <div>
      <div className="Popup  ">
        <div class="card-container animate">
          <div class="card">
            <div className="BookBtn" onClick={onClose}>
              X
            </div>
            <div class="card-1 Head">
              <h2>Get In Touch With Us!</h2>
              <p>TNP Event Planners</p>
            </div>
            <form id="card-form" onSubmit={handleSubmit} novalidate>
              <label>Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <label>Your Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <label>Your Contact Number</label>
              <input
                type="number"
                id="contact"
                placeholder="Enter your Contact No"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <br />

              <label>Your Message</label>
              <input
                type="text"
                id="message"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <br />

              <div id="email-error" class="error-message"></div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
