import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonateForms from '../components/DonateForms';
import '../styles/Donate/Donate.style.css';

function Donate() {
  return (
    <section className="grid-template">
      <Header />
      <main className="">
        <DonateForms />
      </main>
      <Footer />
    </section>
  );
}

export default Donate;
