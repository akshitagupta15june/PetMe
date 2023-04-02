import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BlogTemplate } from '../components/Blog';

function Blog() {
  return (
    <section className="grid-template">
      <Header />
      <main className="flex flex-col w-full justify-center">
        <BlogTemplate />
      </main>
      <Footer />
    </section>
  );
}

export default Blog;
