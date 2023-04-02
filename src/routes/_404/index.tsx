import { m } from 'framer-motion';

import TransitionContainer from '@/components/Layout/TransitionContainer';
import StarryNight from '@/components/StarryNight';
import LinkBtn from '@/components/LinkBtn';

import { springReveal } from '@/data/data';

function _404() {
  const page = window.location.pathname.split('/')[1];

  return (
    <TransitionContainer className='relative h-screen overflow-hidden'>
      <div className='sm:text-center' data-testid='_404'>
        <m.h1 className='text-2xl font-bold' variants={springReveal}>
          Oops! 404
        </m.h1>
        <m.p variants={springReveal}>{`Planet ${page} was not found.`}</m.p>
        <LinkBtn url='/' className='mt-6 w-8/12 py-3 ' variants={springReveal}>
          Go home
        </LinkBtn>
      </div>
      <StarryNight />
    </TransitionContainer>
  );
}

export default _404;
