import { domAnimation, LazyMotion, m } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import LinkBtn from '../components/LinkBtn';
import StarryNight from '../components/StarryNight';
import Delay from '../components/Layout/Delay';
import { homeData } from '../data/data';
import { pageTransition, springReveal } from '../data/data';
import HideOverflow from '../components/Layout/HideOverflow';

function Home() {
  const { heading, emoji, subheading, descriptors, cta } = homeData;
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
            <HideOverflow className='flex sm:justify-center'>
              <m.h1
                className='text-5xl font-bold overflow-y-hidden
                bg-gradient-to-r from-slate-400 to-purple-700 bg-clip-text text-fill-transparent'
                variants={springReveal}
              >
                {heading}
              </m.h1>
              <m.p className='text-2xl xl:text-3xl' variants={springReveal}>
                {emoji}
              </m.p>
            </HideOverflow>

            <HideOverflow className='flex items-center sm:mx-auto mt-2'>
              <m.p className='xl:text-[18px] mr-1' variants={springReveal}>
                {subheading}
              </m.p>
              <Delay wait={600}>
                <Typewriter
                  options={{
                    strings: descriptors,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Delay>
            </HideOverflow>

            <HideOverflow>
              <LinkBtn
                url='/Portfolio'
                className='home-cta mt-6 sm:mx-auto'
                variants={springReveal}
                dataTestID={'home-cta'}
              >
                {cta}
              </LinkBtn>
            </HideOverflow>
          </m.section>
        </m.div>
        <StarryNight />
      </LazyMotion>
    </>
  );
}

export default Home;
