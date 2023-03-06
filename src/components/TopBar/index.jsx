import React from 'react';
import buttons from '../../helpers/buttonsForHeader';
import logo from '../../assets/images/logo.jpg';

function TopBar() {
  return (
    <header
      id="header"
      className="max-w-screen text-white bg-orange-900 flex items-center justify-around lg:justify-around"
    >
      <div className="flex items-center md:items-center p-5" id="logo">
        <span className="p-2"> Saving Lives </span>
        <a
          href="/"
        >
          <img className="rounded-full w-20" src={logo} alt="logo" />
        </a>
        <span className="p-2"> Saving Animals </span>
      </div>

      <nav className="flex items-center justify-center">
        { buttons.map((button, index) => (
          <a
            key={button.id}
            href={button.link}
            className={index !== 8 ? 'p-2 hover:text-orange-300 hover:underline' : null}
          >
            { index === 8 ? (
              <button
                type="button"
                className="bg-[#C57837] p-4 focus:outline-none font-bold rounded mt-4 md:mt-0"
              >
                {button.name}
              </button>
            ) : (button.name)}
          </a>
        ))}
      </nav>

    </header>
  );
}

export default TopBar;
