/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function TitleSection(props) {
  const { title } = props;
  return (
    <section className="bg-[#C57837] w-screen">
      <h1 className="text-6xl text-white text-center p-8">
        { title }
      </h1>
    </section>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSection;
