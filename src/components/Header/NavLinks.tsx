import { links } from '../../data/data';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type TNav = {
  isMobile: boolean;
  toggleMenu?: () => void;
};

function NavLinks({ isMobile, toggleMenu }: TNav) {
  const path = useLocation().pathname;

  return (
    <nav
      className={clsx(
        'flex',
        isMobile && 'mb-12 flex-col text-right',
        !isMobile && 'relative'
      )}
    >
      {links.map((link, index) => (
        <NavLink
          className={({ isActive }) =>
            clsx(
              'transition-all',
              isActive
                ? 'text-text-dark'
                : 'text-slate-400 hover:text-text-dark',
              isMobile ? 'my-2 py-4 px-6 pr-0' : 'ml-6 px-0 py-2'
            )
          }
          key={index}
          to={`/${link}`}
          data-testid={!isMobile ? link : undefined}
          onClick={isMobile ? toggleMenu : undefined}
        >
          <span className='relative px-4 py-2'>
            {link}
            {`/${link}` === path ? (
              <motion.div
                className='absolute inset-0 z-[0] hidden rounded-md bg-neutral-400/[0.35]  sm:block'
                layoutId='navlinks'
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 27,
                }}
              />
            ) : null}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavLinks;
