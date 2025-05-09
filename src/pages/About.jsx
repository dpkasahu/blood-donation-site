import React from 'react';
import '../components/About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Us</h1>

      <section className="about-introduction">
        <h2>Who We Are</h2>
        <p>
          We are a group of passionate individuals dedicated to helping
          save lives through the power of blood donation. Our mission is to
          raise awareness, build a community, and provide support for those
          in need of blood donations.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple – to make blood donation accessible, easy, and safe for everyone. 
          We aim to encourage and educate people about the importance of donating blood, 
          and to connect donors with individuals in urgent need of life-saving blood transfusions.
        </p>
      </section>
      
      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to <a href="/contact">reach out to us</a>.</p>
      </section>
    </div>
  );
};

export default About;
