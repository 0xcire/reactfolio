import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Container from './Container';

function Layout() {
  const pathname = useLocation().pathname;

  return (
    <Container>
      <div className='relative min-h-screen flex flex-col justify-between'>
        <Header />

        <main
          className={`grow ${
            pathname === '/' ? 'bg-transparent' : 'bg-primary-dark'
          }`}
          data-testid='main'
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
