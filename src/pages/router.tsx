import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';

// import Home from './Home';
// import Portfolio from './Portfolio';
// import _404 from './_404';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <_404 />,
//   },
//   {
//     path: '/Portfolio',
//     element: <Portfolio />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout id='sike' />}>
      <Route
        path='/Portfolio'
        // lazy={() => import('./components/Layout/Layout')}
      />
    </Route>
  )
);

export default router;
