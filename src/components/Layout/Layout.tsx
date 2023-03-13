import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

type PageProps = {
  id: string;
};

function Layout({ id }: PageProps) {
  const pathname = useLocation().pathname;

  return (
    // <Suspense>
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
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
    //</Suspense>
  );
}

export default Layout;
