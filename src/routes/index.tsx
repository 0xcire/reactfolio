import { ReactNode, lazy } from 'react';

import Home from '@/routes/Home';

const Portfolio = lazy(() => import('@/routes/Portfolio'));
const About = lazy(() => import('@/routes/About'));
const Contact = lazy(() => import('@/routes//Contact'));

type TRoutes = {
  path: string;
  component: ReactNode;
};

const routes: Array<TRoutes> = [
  { path: '/', component: <Home /> },
  { path: '/Portfolio', component: <Portfolio /> },
  { path: '/About', component: <About /> },
  { path: '/Contact', component: <Contact /> },
];

export default routes;
