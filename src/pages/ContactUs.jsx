import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactForms from '../components/ContactForms';

function ContactUs() {
  return (
    <section className="grid-template">
      <Header />
      <main className="flex flex-col w-full justify-center">
        <ContactForms />
      </main>
      <Footer />
    </section>
  );
}

export default ContactUs;
