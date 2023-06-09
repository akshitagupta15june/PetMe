import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import VolunteerForms from '../components/VolunteerForms';

function SupportUs() {
  return (
    <section className="grid-template">
      <Header />
      <main className="flex flex-col w-full justify-center">
        <VolunteerForms />
      </main>
      <Footer />
    </section>
  );
}

export default SupportUs;
