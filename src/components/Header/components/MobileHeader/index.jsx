import React from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';
import logo from '../../../../assets/images/logo.jpg';
import MenuToggle from './MenuToggle';
import MenuItem from './MenuItem';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

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

      <div>

        <MenuToggle
          handleMenu={handleMenu}
          isMenuOpen={isMenuOpen}
        />

        <motion.nav
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className={isMenuOpen ? 'block w-full h-[100vh] lg:block' : 'hidden w-full lg:block'}
        >

          <MenuItem />

        </motion.nav>
      </div>

    </header>
  );
}

MobileMenu.propTypes = {
  handleMenu: propTypes.func.isRequired,
  isMenuOpen: propTypes.bool.isRequired,
};

export default MobileMenu;
