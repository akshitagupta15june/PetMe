import React from 'react';
import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Report() {
  return (
    <section className="grid-template">
      <Header />
      <main className="flex flex-col w-full justify-center">
        <Error />
      </main>
      <Footer />
    </section>
  );
}

export default Report;
