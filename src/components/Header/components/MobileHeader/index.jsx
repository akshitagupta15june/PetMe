import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import buttons from '../../../../helpers/buttonsForHeader';
import logo from '../../../../assets/images/logo.jpg';

function MobileMenu(props) {
  const { handleMenu, isMenuOpen } = props;

  return (
    <header
      id="header"
      className="text-white bg-orange-900 flex items-center justify-around"
    >
      <div className="flex items-center md:items-center p-5" id="logo">
        <a
          href="/"
        >
          <img className="rounded-full w-20" src={logo} alt="logo" />
        </a>
      </div>

      <button
        type="button"
        className="absolute top-8 right-10 sm:inline-flex sm:items-center p-2 lg:hidden focus:outline-none"
        id="nav-button"
        onClick={handleMenu}
      >
        <span className="sr-only">Open main menu</span>
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

      <nav>
        <div
          className={isMenuOpen ? 'block w-full h-[100vh] lg:block z-0' : 'hidden w-full lg:block z-0'}
          id="navbar"
        >
          <ul
            className="w-[100vw] h-[100vh] top-0 right-0 p-4 text-center flex flex-col gap-5 justify-center items-center bg-orange-900 text-white"
          >
            { buttons.map((button) => (
              <li
                key={button.id}
                className="p-2 hover:text-orange-300 hover:underline"
              >
                <Link
                  to={button.link}
                  className="p-2 hover:text-orange-300 hover:underline"
                >
                  {button.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </header>
  );
}

MobileMenu.propTypes = {
  handleMenu: propTypes.func.isRequired,
  isMenuOpen: propTypes.bool.isRequired,
};

export default MobileMenu;
