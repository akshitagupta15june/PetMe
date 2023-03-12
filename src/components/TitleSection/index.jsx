/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function TitleSection(props) {
  const { title } = props;
  return (
    <section className="bg-[#C57837] w-100">
      <h1 className="lg:text-5xl text-3xl text-white text-center p-8">
        { title }
      </h1>
    </section>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSection;
