// next.js from wish

import { FC, PropsWithChildren, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

type PageProps = PropsWithChildren<{
  id: string;
}>;

const Layout: FC<PageProps> = ({ id }) => {
  const pathname = useLocation().pathname;

  return (
    <Suspense>
      <div
        id={id}
        className='relative min-h-screen flex flex-col justify-between'
      >
        <Header />

        <main
          className={`grow ${
            pathname === '/' ? 'bg-transparent' : 'bg-primary-dark'
          }`}
        >
          <Outlet />
        </main>

        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
