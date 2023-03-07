import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TitleSection from '../components/TitleSection';
import AnimalsCard from '../components/AnimalsCard';
import ContactForms from '../components/ContacForms';
import Contributors from '../components/Contributors';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <TitleSection title="Meet our Friends Here!" />
        <AnimalsCard />
        <ContactForms />
        <Contributors />
      </main>
      <Footer />
    </>
  );
}

export default App;
