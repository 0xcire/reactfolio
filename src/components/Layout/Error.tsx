import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import StarryNight from '../StarryNight';

function Error() {
  return (
    <Suspense>
      <div>
        <Outlet />
        <StarryNight />
      </div>
    </Suspense>
  );
}

export default Error;
