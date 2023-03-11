import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m, spring } from 'framer-motion';
import StarryNight from '../components/StarryNight';

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
  return (
    <>
      <LazyMotion features={domAnimation} strict>
        <m.div
          className='h-[calc(100vh-128.5px)] grid place-items-center px-6 bg-transparent text-text-dark overflow-hidden'
          variants={transitionVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          <section className='w-full flex flex-col sm:text-center'>
            <div className='overflow-hidden'>
              <m.h1
                className='text-4xl font-bold overflow-y-hidden'
                variants={headingVariants}
                initial={'initial'}
                animate={'animate'}
                transition={{ delay: 0.3, type: spring }}
              >
                {"Hi, I'm Eric 🚀"}
              </m.h1>
            </div>

            <p className='mt-2'>I am a Full-Stack Developer.</p>
            <Link
              className='rounded-md p-3 block mt-6 w-5/12 max-w-[300px] h-full text-center text-text-light bg-accent-dark sm:mx-auto'
              to={`/Portfolio`}
            >
              View my work
            </Link>
          </section>
        </m.div>
        <StarryNight />
      </LazyMotion>
    </>
  );
}

export default Home;
