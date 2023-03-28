import { useState, useEffect, useCallback, useRef } from 'react';
import { LazyMotion, m, AnimatePresence, domAnimation } from 'framer-motion';
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';

const navVariants = {
  open: { opacity: 1, x: '0' },
  closed: { opacity: 0, x: '50%' },
};

function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
    !mobileMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleMenu();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileRef.current) {
        if (
          !mobileRef.current.contains(target) &&
          !target.closest('.menu-btn')
        ) {
          toggleMenu();
        } else {
          return;
        }
      }
    };

    document.addEventListener('keydown', handleEscKey, { once: true });
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleMenu]);

  return (
    <>
      <button className='menu-btn sm:hidden' onClick={toggleMenu}>
        <Hamburger mobileMenuOpen={mobileMenuOpen} />
      </button>
      <AnimatePresence>
        {mobileMenuOpen && (
          <LazyMotion features={domAnimation} strict>
            <m.div
              ref={mobileRef}
              key='mobileMenu'
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              transition={{ duration: 0.15 }}
              variants={navVariants}
              className='absolute top-[100%] right-0 w-5/12 h-[calc(100svh-theme(height.header))] 
                         pr-6 flex flex-col justify-end w-max-content bg-[#14213d]/[0.5] backdrop-blur-sm text-text-dark z-10'
            >
              <NavLinks isMobile={true} toggleMenu={toggleMenu} />
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
