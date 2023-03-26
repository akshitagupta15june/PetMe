import { useMemo, useRef } from 'react';
import Proptype from 'prop-types';
import HeaderContext from './HeaderContext';

function HeaderProvider({ children }) {
  const aboutSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const context = useMemo(() => ({
    aboutSection,
    scrollDown,
  }), [aboutSection, scrollDown]);

  return (
    <HeaderContext.Provider value={context}>
      { children }
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: Proptype.node.isRequired,
};

export default HeaderProvider;
