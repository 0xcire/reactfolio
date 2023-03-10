import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useState, useEffect, useRef } from 'react';

// [] add to data directory
const links: string[] = ['Portfolio', 'About', 'Contact'];

function Header() {
  // const [isOverlapping, setOverlapping] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  // throttle to not fire so many events?
  // const handleScroll = () => {
  //   const header = headingRef.current?.getBoundingClientRect();
  //   const nextElement =
  //     headingRef.current?.nextElementSibling?.getBoundingClientRect();
  //   if (header && nextElement) {
  //     if (
  //       header?.top <= nextElement?.top + nextElement?.height &&
  //       header.top + header.height > nextElement.top
  //     ) {
  //       setOverlapping(true);
  //     } else {
  //       setOverlapping(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);

  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, []);

  // sticky top-0
  // isOverlapping ? 'bg-[#1d2d44]/[0.85]' : 'bg-transparent'
  return (
    <header
      ref={headingRef}
      className='relative flex justify-between items-center w-full px-6 sm:px-12 lg:px-28 py-4 sm:py-8 text-primary-light dark:text-text-dark'
    >
      <h1 className='font-bold text-2xl'>
        <Link to={`/`}>EC</Link>
      </h1>
      <div className='hidden sm:flex sm:items-center'>
        <div className='socials flex items-center justify-end'>
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
