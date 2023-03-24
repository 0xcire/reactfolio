import { domAnimation, LazyMotion, m } from 'framer-motion';
import LinkBtn from '../components/LinkBtn';
import StarryNight from '../components/StarryNight';
import { homeData } from '../data/data';
import { pageTransition, content } from '../data/data';

function Home() {
  const { heading, emoji, subheading, cta } = homeData;
  return (
    <>
      <LazyMotion features={domAnimation} strict>
        <m.div
          className='h-[calc(100svh-(theme(height.header)+theme(height.footer)))] grid place-items-center px-6 bg-transparent text-text-dark z-10'
          variants={pageTransition}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{
            delayChildren: 0.15,
            staggerChildren: 0.1,
          }}
        >
          <m.section
            className='w-full flex flex-col sm:text-center'
            data-testid='home-section'
          >
            <div className=' overflow-hidden flex sm:justify-center'>
              <m.h1
                className='text-5xl font-bold overflow-y-hidden
                bg-gradient-to-r from-slate-400 to-purple-700 bg-clip-text text-fill-transparent'
                variants={content}
              >
                {heading}
              </m.h1>
              <m.p className='text-2xl xl:text-3xl' variants={content}>
                {emoji}
              </m.p>
            </div>
            <m.p className='mt-2 xl:text-[18px]' variants={content}>
              {subheading}
            </m.p>
            <LinkBtn
              url='/Portfolio'
              className='home-cta mt-6 sm:mx-auto'
              variants={content}
              dataTestID={'home-cta'}
            >
              {cta}
            </LinkBtn>
          </m.section>
        </m.div>
        <StarryNight />
      </LazyMotion>
    </>
  );
}

export default Home;
