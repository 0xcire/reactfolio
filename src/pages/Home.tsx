import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m, spring } from 'framer-motion';
import StarryNight from '../components/StarryNight';
import { homeData } from '../data/data';

// TODO: extract to data
const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const headingVariants = {
  initial: { y: '100%' },
  animate: { y: 0 },
};

function Home() {
  const { heading, emoji, subheading, cta } = homeData;
  return (
    <>
      <LazyMotion features={domAnimation} strict>
        <m.div
          // TODO: could pull out this height calculation or make heading constant regardless
          className='h-[calc(100vh-128.5px)] sm:h-[calc(100vh-144.5px)] lg:h-[calc(100vh-176.5px)] grid place-items-center px-6 bg-transparent text-text-dark overflow-hidden'
          variants={transitionVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          <section className='w-full flex flex-col sm:text-center'>
            <div className='overflow-hidden flex sm:justify-center'>
              {/* TODO: come back and adjust heading gradient */}
              <m.h1
                className='text-4xl font-bold overflow-y-hidden bg-gradient-to-r from-slate-400 to-purple-700 bg-clip-text text-fill-transparent'
                variants={headingVariants}
                initial={'initial'}
                animate={'animate'}
                transition={{ delay: 0.3, type: spring }}
              >
                {heading}
              </m.h1>
              <p className='text-2xl'>{emoji}</p>
            </div>
            <p className='mt-2'>{subheading}</p>
            {/* TODO: button hover fills */}
            <Link
              className='w-5/12 max-w-[300px] h-full block p-3 mt-6 rounded-md text-center text-text-light bg-accent-dark sm:mx-auto'
              to={`/Portfolio`}
            >
              {cta}
            </Link>
          </section>
        </m.div>
        <StarryNight />
      </LazyMotion>
    </>
  );
}

export default Home;
