import { motion } from 'framer-motion';
import React from 'react';
import hero from '../../assets/images/main-heading-body-bg.jpg';

function index() {
  const whileInView = {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
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
    <motion.img
      src={hero}
      alt=""
      className="w-[100vw] xl:max-h-[50rem] object-cover"
      initial={{ opacity: 0 }}
      whileInView={whileInView}
      animate={animateDiv}
      viewport={{ once: true }}
    />

  );
}

export default index;
