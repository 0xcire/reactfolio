import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import Error from './components/Layout/Error';
const _404 = lazy(() => import('./pages/_404'));

import routes from './pages/routes';

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
