import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Container from './Container';
import Header from '../Header';
import Footer from '../Footer';

function Layout() {
  const pathname = useLocation().pathname;

  return (
    <Container>
      <div className='relative flex min-h-screen flex-col justify-between'>
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
    </Container>
  );
}

export default Layout;
