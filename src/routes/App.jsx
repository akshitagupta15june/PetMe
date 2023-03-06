import React from 'react';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import About from '../components/About';
import TitleSection from '../components/TitleSection';
import AnimalsCard from '../components/AnimalsCard';
import ContactForms from '../components/ContacForms';
import Contributors from '../components/Contributors';

function App() {
  return (
    <main className="flex flex-col w-screen">
      <TopBar />
      <Hero />
      <About />
      <TitleSection title="Meet our Friends Here!" />
      <AnimalsCard />
      <ContactForms />
      <Contributors />
    </main>
  );
}

export default App;
