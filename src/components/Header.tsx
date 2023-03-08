import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

// [] add to data directory
const links: string[] = ['Portfolio', 'About', 'Contact'];

function Header() {
  return (
    <header className='relative flex justify-between items-center w-full px-6 xl:px-20 py-4  bg-transparent text-primary-light dark:text-text-dark'>
      <h1 className='font-bold text-2xl'>
        <Link to={`/`}>EC</Link>
      </h1>
      <div className='hidden sm:flex sm:items-center'>
        <div className='socials flex items-center justify-end mt-1'>
          <Link
            className='mr-6'
            to={`https://github.com/0xcire`}
            target='_blank'
          >
            <GithubLogo size={32} />
          </Link>
          <Link to={`https://www.linkedin.com/in/ericchi1/`} target='_blank'>
            <LinkedinLogo size={32} />
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
