import { RouterProvider } from 'react-router-dom';
import router from './pages/router';

function App() {
  return (
    // h-screen
    <div className='App min-h-full'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
