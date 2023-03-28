import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimalsCard from '../components/AnimalsCard';
import ContactForms from '../components/ContactForms';
import Contributors from '../components/Contributors';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <AnimalsCard />
        <ContactForms />
        <Contributors />
      </main>
      <Footer />
    </>
  );
}

export default App;
