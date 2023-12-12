import { m } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import Delay from '@/components/Layout/Delay';
import HideOverflow from '@/components/Layout/HideOverflow';
import TransitionContainer from '@/components/Layout/TransitionContainer';
import LinkBtn from '@/components/LinkBtn';
import StarryNight from '@/components/StarryNight';

import { homeData, springReveal } from '@/data/data';

function Home() {
  const { heading, emoji, subheading, descriptors, cta } = homeData;
  useDocumentTitle('Home | ECFolio');
  return (
    <TransitionContainer className='padding-x z-10 h-[calc(100svh-(theme(height.header)+theme(height.footer)))] bg-transparent'>
      <m.section
        className='flex w-full flex-col sm:text-center'
        data-testid='home-section'
      >
        <HideOverflow className='flex sm:justify-center'>
          <m.h1
            className='text-fill-transparent bg-gradient-to-r
                from-slate-400 to-purple-700 bg-clip-text text-5xl font-bold'
            variants={springReveal}
            tabIndex={-1}
          >
            {heading}
          </m.h1>
          <m.p className='text-2xl xl:text-3xl' variants={springReveal}>
            {emoji}
          </m.p>
        </HideOverflow>

        <HideOverflow className='mt-2 flex items-center sm:mx-auto'>
          <m.p className='mr-1' variants={springReveal}>
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

          {/* <motion.a
            variants={springReveal}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className='home-cta mt-6 w-fit rounded-md bg-accent-dark px-5 py-2 text-text-light sm:mx-auto'
            href='#'
            download=''
          >
            Download Resume
          </motion.a> */}
        </HideOverflow>
      </m.section>

      <StarryNight />
    </TransitionContainer>
  );
}

export default Home;
