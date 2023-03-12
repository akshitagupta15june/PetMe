import React from 'react';
import { Link } from 'react-router-dom';
import buttons from '../../helpers/buttonsForHeader';
import logo from '../../assets/images/logo.jpg';
import MobileMenu from './components/MobileHeader';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const MOBILE_WIDTH = 1022;

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [MOBILE_WIDTH]);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMobile || isMenuOpen) {
    return (
      <MobileMenu handleMenu={handleMenu} isMenuOpen={isMenuOpen} />
    );
  }

  return (
    <header
      id="header"
      className="text-white bg-orange-900 flex items-center justify-around"
    >
      <div className="flex items-center md:items-center p-5" id="logo">
        <span className="p-2 xl:text-xl text-sm"> Saving Lives </span>
        <a
          href="/"
        >
          <img className="rounded-full w-20" src={logo} alt="logo" />
        </a>
        <span className="p-2 xl:text-xl text-sm"> Saving Animals </span>
      </div>

      <nav className="flex items-center justify-center">
        { buttons.map((button) => (
          <a
            key={button.id}
            href={button.link}
            className="p-2 hover:text-orange-300 hover:underline lg:text-[0.8rem] xl:text-[1rem]"
          >
            {button.name}
          </a>
        ))}

        <Link
          to="/contact"
          className="p-2 hover:text-orange-300 hover:underline"
        >
          <button
            type="button"
            className="bg-[#C57837] p-4 focus:outline-none font-bold rounded mt-4 md:mt-0 lg:text-[0.9rem] xl:text-[1rem]"
          >
            Contact Us
          </button>

        </Link>
      </nav>

    </header>
  );
}

export default Header;
