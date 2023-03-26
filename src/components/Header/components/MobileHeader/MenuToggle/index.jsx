import * as React from 'react';
import propTypes from 'prop-types';

function MenuToggle(props) {
  const { handleMenu } = props;

  return (
    <button
      type="button"
      className="absolute z-10 top-8 right-10 sm:inline-flex sm:items-center p-2 lg:hidden focus:outline-none"
      id="nav-button"
      onClick={handleMenu}
    >
      <svg
        className="w-10 h-10"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

MenuToggle.propTypes = {
  handleMenu: propTypes.func.isRequired,
};

export default MenuToggle;
