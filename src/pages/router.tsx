import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import _404 from './_404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <_404 />,
  },
  {
    path: '/Portfolio',
    element: <Portfolio />,
  },
]);

export default router;
