import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import Error from './components/Layout/Error';
import Home from './pages/Home';
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const _404 = lazy(() => import('./pages/_404'));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes key={'routes'}>
          <Route path='/' element={<Layout id='id' />}>
            <Route index element={<Home />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
          </Route>
          <Route element={<Error />}>
            <Route path='*' element={<_404 />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
