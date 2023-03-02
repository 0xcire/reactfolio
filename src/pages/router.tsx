import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';
import _404 from './_404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <_404 message='page not found!'></_404>,
  },
]);

export default router;
