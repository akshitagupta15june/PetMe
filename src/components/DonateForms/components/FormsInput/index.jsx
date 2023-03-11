import React from 'react';
import PropTypes from 'prop-types';

function FormsInput(props) {
  const { text, index } = props;
  return (
    <div className={index === 2 ? 'col-span-2 p-2 w-full' : 'col-span-1 p-2 w-full'}>

      <label
        htmlFor="name"
        className="leading-7 text-sm text-gray-900"
      >
        { text }
      </label>

      <input
        type="text"
        placeholder={text}
        className={
            index === 2
              ? 'w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              : 'col-span-2 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          }
        required
      />

    </div>

  );
}

FormsInput.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FormsInput;
