import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimalsCard from '../components/AnimalsCard';
import Contributors from '../components/Contributors';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <AnimalsCard />
        <Contributors />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
