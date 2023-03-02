import { RouterProvider } from 'react-router-dom';
import router from './pages/router';

function App() {
  return (
    <div className='App h-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
