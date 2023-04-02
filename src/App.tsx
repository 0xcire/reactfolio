import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Error from '@/components/Layout/Error';
import Layout from '@/components/Layout/Layout';

const _404 = lazy(() => import('@/routes/_404'));

import routes from './routes';

function App() {
  return (
    <AnimatePresence>
      <Routes key={'routes'}>
        <Route element={<Layout />}>
          {routes.map((page, index) => (
            <Route key={index} path={page.path} element={page.component} />
          ))}
        </Route>
        <Route element={<Error />}>
          <Route path='*' element={<_404 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
