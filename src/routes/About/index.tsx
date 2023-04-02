import { m } from 'framer-motion';

import SkillFiles from './components/SkillTree';
import HideOverflow from '@/components/Layout/HideOverflow';
import TransitionContainer from '@/components/Layout/TransitionContainer';
import LinkBtn from '@/components/LinkBtn';

import { aboutData, springReveal } from '@/data/data';

function About() {
  const { heading, paragraphs, skills, cta } = aboutData;
  return (
    <TransitionContainer>
      <section
        id='about-me'
        className='padding-x h-[inherit] py-12 md:grid md:grid-cols-[1fr,2fr] 2xl:grid-cols-[0.75fr,2fr]'
        data-testid='about-section'
      >
        <HideOverflow className='order-2'>
          <m.h1
            className='max-w-[600px] text-2xl leading-none'
            variants={springReveal}
          >
            {heading}
          </m.h1>
        </HideOverflow>

        <div>{''}</div>

        <HideOverflow className='order-4 mt-8'>
          <m.div
            className='text-wrapper max-w-[450px] leading-relaxed sm:text-base xl:max-w-[650px] 2xl:leading-relaxed'
            variants={springReveal}
          >
            {paragraphs.map((text, index) => (
              <p className='my-4' key={index}>
                {text}
              </p>
            ))}
            <LinkBtn
              url='/Contact'
              className='mt-6 block'
              dataTestID={'about-cta'}
            >
              {cta}
            </LinkBtn>
          </m.div>
        </HideOverflow>

        <SkillFiles skills={skills} />
      </section>
    </TransitionContainer>
  );
}

export default About;
