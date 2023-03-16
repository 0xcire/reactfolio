import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LazyMotion, m, AnimatePresence, domAnimation } from 'framer-motion';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

const navVariants = {
  open: { opacity: 1, x: '0' },
  closed: { opacity: 0, x: '50%' },
};

const middleVariant = {
  open: { x1: 40 },
  closed: { x1: 80 },
};

const bottomVariant = {
  open: { x1: 40 },
  closed: { x1: 120 },
};

type MobileNavProps = {
  links: string[];
};

function MobileNav({ links }: MobileNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
    // TODO: close on scroll
    // TODO: make menu container smaller, doesnt need to take up screen
    // TODO: focus-trap npm
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
    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleMenu]);

  return (
    <>
      <button className='menu-btn sm:hidden' onClick={toggleMenu}>
        <LazyMotion features={domAnimation}>
          <m.svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='#f0ebd8'
            viewBox='0 0 256 256'
          >
            <rect width='24' height='24' fill='none'></rect>

            <line
              x1='40'
              y1='64'
              x2='216'
              y2='64'
              stroke='#f0ebd8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></line>

            <m.line
              x1='40'
              y1='128'
              x2='216'
              y2='128'
              stroke='#f0ebd8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
              transition={{ duration: 0.25 }}
              animate={mobileMenuOpen ? 'open' : 'closed'}
              variants={middleVariant}
            ></m.line>

            <m.line
              x1='40'
              y1='192'
              x2='216'
              y2='192'
              stroke='#f0ebd8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
              transition={{ duration: 0.25 }}
              animate={mobileMenuOpen ? 'open' : 'closed'}
              variants={bottomVariant}
            ></m.line>
          </m.svg>
        </LazyMotion>
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
              transition={{ duration: 0.25 }}
              variants={navVariants}
              className='absolute flex flex-col justify-end right-0 top-[100%] w-6/12 h-[calc(100vh-64px)] bg-[#14213d]/[0.85] text-text-dark z-10'
            >
              <div className='socials flex items-center justify-end mr-6 mb-4'>
                <Link
                  className='mr-3'
                  to={`https://github.com/0xcire`}
                  target='_blank'
                >
                  <GithubLogo className='mr-2' size={26} />
                </Link>
                <Link
                  to={`https://www.linkedin.com/in/ericchi1/`}
                  target='_blank'
                >
                  <LinkedinLogo size={26} />
                </Link>
              </div>
              <nav className='flex flex-col text-right  mb-10'>
                {links.map((link, index) => (
                  <Link
                    className='py-2 px-6'
                    key={index}
                    to={`/${link}`}
                    onClick={toggleMenu}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
