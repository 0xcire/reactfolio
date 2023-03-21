import { lazy, ReactNode } from 'react';

import Home from './Home';
const Portfolio = lazy(() => import('./Portfolio'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

type TRoutes = {
  path: string;
  component: ReactNode;
};
const routes: TRoutes[] = [
  { path: '/', component: <Home /> },
  { path: '/Portfolio', component: <Portfolio /> },
  { path: '/About', component: <About /> },
  { path: '/Contact', component: <Contact /> },
];

export default routes;
