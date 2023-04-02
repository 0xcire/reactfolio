import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import MobileNav from '@/components/Header/MobileNav';
import NavLinks from '@/components/Header/NavLinks';

function Header() {
  const headingRef = useRef<HTMLDivElement>(null);
  const path = useLocation().pathname;

  return (
    <header
      ref={headingRef}
      className={`padding-x relative flex h-header w-full items-center justify-between text-text-dark sm:py-6 
      ${path === '/' ? 'bg-transparent' : 'bg-primary-dark'}`}
    >
      <Link className='text-[28px] text-2xl font-bold' to={`/`}>
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
