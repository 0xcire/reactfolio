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
    console.log(mobileMenuOpen, document.body.style.overflow);
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
        <LazyMotion features={domAnimation}>
          <m.svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='28'
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
              transition={{ duration: 0.15 }}
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
              transition={{ duration: 0.15 }}
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
              transition={{ duration: 0.15 }}
              variants={navVariants}
              className='absolute top-[100%] right-0 w-5/12 h-[calc(100svh-theme(height.header))] 
                         pr-6 flex flex-col justify-end w-max-content bg-[#14213d]/[0.5] backdrop-blur-sm text-text-dark z-1'
            >
              <div className='flex items-center justify-end'>
                <Link
                  className='p-6'
                  to={`https://github.com/0xcire`}
                  target='_blank'
                >
                  <GithubLogo size={26} />
                </Link>
                <Link
                  className='p-6 pr-0'
                  to={`https://www.linkedin.com/in/ericchi1/`}
                  target='_blank'
                >
                  <LinkedinLogo size={26} />
                </Link>
              </div>
              <nav className='flex flex-col text-right mb-12'>
                {links.map((link, index) => (
                  <Link
                    className='my-2 py-4 px-6 pr-0'
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
