import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from './Header/NavLinks';
import MobileNav from './Header/MobileNav';

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
        <NavLinks isMobile={false} />
      </div>
      <MobileNav />
    </header>
  );
}

export default Header;
