import React from 'react';
import './Contact.css';
import ContactSection from '../components/ContactSection';
import man from '../assets/man.png';
import manager from '../assets/manager.png';
import boy from '../assets/boy.png';

const ContactUs = () => (
  <main className="contact-page">
    <h1>Contact Us</h1>
    <p>If you have any questions or need assistance, feel free to reach out to our team below.</p>
    <section className="contact-section">
      <ContactSection name="Aryan Goyal" email="aryangoyalbusiness@gmail.com" phone="+91 6396667308" imgSrc={man} />
    </section>
    <section className="contact-section">
      <ContactSection name="Tejasvhi Singh" email="Tejayashsingh@gmail.com" phone="+91 6394468891" imgSrc={manager} />
    </section>
    <section className="contact-section">
      <ContactSection name="Prince Pratap" email="princepratapism@gmail.com" phone="+91 7668629313" imgSrc={boy} />
    </section>
  </main>
);

export default ContactUs;