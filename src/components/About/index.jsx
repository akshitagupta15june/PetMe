import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import HeaderContext from '../../context/HeaderContext';

function index() {
  const {
    aboutSection,
  } = useContext(HeaderContext);

  const whileInView = {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      duration: 1,
    },
  };

  const animateDiv = {
    x: 100,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  };

  return (
    <motion.div
      className="bg-[#111827]"
      initial={{ opacity: 0 }}
      whileInView={whileInView}
      animate={animateDiv}
      viewport={{ once: true }}
    >
      <section className="max-w-screen-xl mx-auto p-6 flex flex-col items-center">
        <h1
          ref={aboutSection}
          className="text-white text-3xl lg:text-5xl py-4"
        >
          About
        </h1>
        <p className="text-[#696C72] text-center pb-4 text-sm lg:text-xl">
          Our mission is to provide a platform that connects animal lovers with pets in need
          of a forever home,
          while also providing emergency medical care for stray animals in distress.
          We strive to make a difference in the lives of these innocent creatures by
          offering options to Adopt,
          Donate and through our SOS feature Report stray animals in need of immediate assistance.
          Together, we can create a better world for all animals.
        </p>
      </section>
    </motion.div>
  );
}

export default index;
