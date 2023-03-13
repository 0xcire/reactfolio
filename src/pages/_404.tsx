import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import StarryNight from '../components/StarryNight';

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function _404() {
  const page = window.location.pathname.split('/')[1];

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='relative h-screen grid place-items-center text-text-dark overflow-hidden'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <div className='sm:text-center'>
          <h1 className='font-bold text-2xl'>Oops! 404</h1>
          <p>{`Planet ${page} was not found.`}</p>
          <Link
            className='rounded-md p-3 block mt-6 w-8/12 max-w-[300px] h-full text-center text-text-light bg-accent-dark sm:mx-auto'
            to={`/`}
          >
            Go home
          </Link>
        </div>
        <StarryNight />
      </m.div>
    </LazyMotion>
  );
}

export default _404;
