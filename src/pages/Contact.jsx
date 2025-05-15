// src/Contact.js
import React, { useState } from 'react';
import '../components/Contact.css'; 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {isSubmitted ? (
        <div className="success-message">
          <h2>Thank you for reaching out!</h2>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
      
      <div className="contact-info">
        <h3>Our Office</h3>
        <p>Parvati Nagar Lane 1, Gunupur, India</p>
        <p>Email: info@blooddonation.org</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
