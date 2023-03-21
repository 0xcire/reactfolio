import { domAnimation, LazyMotion, m, spring } from 'framer-motion';
import LinkBtn from '../components/LinkBtn';
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
          className='h-[calc(100svh-(theme(height.header)+theme(height.footer)))] grid place-items-center px-6 bg-transparent text-text-dark z-10'
          variants={transitionVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          <section className='w-full flex flex-col sm:text-center'>
            <div className='overflow-hidden flex sm:justify-center'>
              {/* TODO: create class for text gradient  */}
              <m.h1
                className='text-5xl font-bold overflow-y-hidden
                bg-gradient-to-r from-slate-400 to-purple-700 bg-clip-text text-fill-transparent'
                variants={headingVariants}
                initial={'initial'}
                animate={'animate'}
                transition={{ delay: 0.3, type: spring }}
              >
                {heading}
              </m.h1>
              <p className='text-2xl xl:text-3xl'>{emoji}</p>
            </div>
            <p className='mt-2 xl:text-[18px]'>{subheading}</p>
            {/* TODO: button hover fills */}
            <LinkBtn url='/Portfolio' className='mt-6 sm:mx-auto'>
              {cta}
            </LinkBtn>
          </section>
        </m.div>
        <StarryNight />
      </LazyMotion>
    </>
  );
}

export default Home;
