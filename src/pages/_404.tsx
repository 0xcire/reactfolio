import { Link } from 'react-router-dom';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import StarryNight from '../components/StarryNight';

function _404() {
  const error = useRouteError();
  const page = window.location.pathname.split('/')[1];

  if (isRouteErrorResponse(error)) {
    return (
      <div className='relative h-screen grid place-items-center text-text-dark overflow-hidden'>
        <div className='sm:text-center'>
          <h1 className='font-bold text-2xl'>Oops! {error.status}</h1>
          <p>{`Planet ${page} ${error.statusText}.`}</p>
          <Link
            className='rounded-md p-3 pb-[0.9rem] block mt-6 w-8/12 max-w-[300px] h-full text-center text-text-light bg-accent-dark sm:mx-auto'
            to={`/`}
          >
            Go home
          </Link>
        </div>
        <StarryNight />
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className='relative h-screen grid place-items-center text-text-dark overflow-hidden'>
        <div className='sm:text-center'>
          <h1 className='font-bold text-2xl'>Oops! Unexpected Error</h1>
          <p>{error.message}</p>
          <Link
            className='rounded-md p-3 pb-[0.9rem] block mt-6 w-8/12 max-w-[300px] h-full text-center text-text-light bg-accent-dark sm:mx-auto'
            to={`/`}
          >
            Go home
          </Link>
        </div>
        <StarryNight />
      </div>
    );
  } else {
    return <></>;
  }
}

export default _404;
