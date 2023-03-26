/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function TitleSection(props) {
  const { title } = props;
  return (
    <motion.div
      className="w-100 pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="lg:text-5xl text-3xl text-black text-center p-8">
        { title }
      </h1>
    </motion.div>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSection;
