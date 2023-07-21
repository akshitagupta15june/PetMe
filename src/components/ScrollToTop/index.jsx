import React, { useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <div className="fixed w-full h-5 text-6xl cursor-pointer left-10 bottom-16">
        <IoIosArrowDropupCircle
          data-testid="scrollToTopIcon"
          onClick={scrollToTop}
          style={{
            display: visible ? 'inline' : 'none',
            color: '#7C2D12',
          }}
        />
      </div>
    </>
  );
};

export default ScrollToTop;
