import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import MobileNav from './Header/MobileNav';
import { links } from '../data/data';

function Header() {
  const headingRef = useRef<HTMLDivElement>(null);
  const path = useLocation().pathname;

  return (
    <header
      ref={headingRef}
      className={`relative flex justify-between items-center h-header w-full padding-x sm:py-6 text-text-dark 
      ${path === '/' ? 'bg-transparent' : 'bg-primary-dark'}`}
    >
      <Link className='text-[28px] font-bold text-2xl' to={`/`}>
        EC
      </Link>

      <div className='hidden sm:flex sm:items-center'>
        <div className='flex items-center justify-end'>
          <Link
            className='mr-6'
            to={`https://github.com/0xcire`}
            target='_blank'
          >
            <GithubLogo size={26} />
          </Link>
          <Link to={`https://www.linkedin.com/in/ericchi1/`} target='_blank'>
            <LinkedinLogo size={26} />
          </Link>
        </div>
        <nav className='flex'>
          {links.map((link, index) => (
            <Link
              className='ml-12 px-0 py-2'
              key={index}
              to={`/${link}`}
              data-testid={link}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
      <MobileNav links={links} />
    </header>
  );
}

export default Header;
