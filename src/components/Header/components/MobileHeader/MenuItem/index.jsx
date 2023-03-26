import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import buttons from '../../../../../helpers/buttonsForHeader';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function MenuItem() {
  return (
    <motion.ul
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-[100vw] h-[100vh] top-0 right-0 p-4 text-center flex flex-col gap-5 justify-center items-center bg-orange-900 text-white"
    >
      { buttons.map((button) => (
        <motion.li
          key={button.id}
          className="p-2 hover:text-orange-300 hover:underline"
        >
          <Link
            key={button.id}
            to={button.link}
            className="text-white text-2xl font-bold"
          >
            {button.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default MenuItem;
