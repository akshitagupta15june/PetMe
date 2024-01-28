import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BlogTemplate } from '../components/Blog';
import BlogSubmissionBox from '../components/Blog/BlogSubmissionBox';

function Blog() {
  return (
    <>
      <Header />
      <BlogSubmissionBox />
      <main className="flex flex-col w-full justify-center">
        <BlogTemplate />
      </main>
      <Footer />
    </>
  );
}

export default Blog;
