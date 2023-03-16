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
      className={`relative flex justify-between items-center w-full px-6 sm:px-12 lg:px-28 py-4 sm:py-6 text-primary-light dark:text-text-dark ${
        path === '/' ? 'bg-transparent' : 'bg-primary-dark'
      }`}
    >
      <h1 className='font-bold text-2xl'>
        <Link to={`/`}>EC</Link>
      </h1>
      <div className='hidden sm:flex sm:items-center'>
        <div className='socials flex items-center justify-end'>
          {/* TODO: consider removing social links from header, and add to hero */}
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
            <Link className='ml-12 px-0 py-2' key={index} to={`/${link}`}>
              <p className='leading-[100%]'>{link}</p>
            </Link>
          ))}
        </nav>
      </div>
      <MobileNav links={links} />
    </header>
  );
}

export default Header;
