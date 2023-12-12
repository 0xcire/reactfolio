import { m } from 'framer-motion';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import SkillFiles from './components/SkillTree';
import HideOverflow from '@/components/Layout/HideOverflow';
import TransitionContainer from '@/components/Layout/TransitionContainer';
import LinkBtn from '@/components/LinkBtn';

import { aboutData, springReveal } from '@/data/data';

function About() {
  const { heading, paragraphs, skills, cta } = aboutData;
  useDocumentTitle('About | ECFolio');
  return (
    <TransitionContainer>
      <section
        id='about-me'
        className='padding-x h-[inherit] py-12 md:grid md:h-full md:w-full md:grid-cols-12 md:grid-rows-6 md:gap-2'
        data-testid='about-section'
      >
        <HideOverflow className='col-start-5 col-end-11 flex items-center'>
          <m.h1
            className='max-w-[600px] text-2xl leading-none'
            variants={springReveal}
          >
            {heading}
          </m.h1>
        </HideOverflow>

        <HideOverflow className='col-start-5 col-end-11 row-start-2 row-end-7'>
          <m.div
            className='text-wrapper max-w-[450px] leading-relaxed sm:text-base xl:max-w-[650px] 2xl:leading-relaxed'
            variants={springReveal}
          >
            {paragraphs.map((text, index) => (
              <p className='my-4' key={index}>
                {text}
              </p>
            ))}
            <div className='flex items-center gap-4'>
              <LinkBtn
                url='/Contact'
                className='block'
                dataTestID={'about-cta'}
              >
                {cta}
              </LinkBtn>
              <a
                href='../../../public/docs/ec-resume.pdf'
                download
                className='underline hover:text-slate-300'
              >
                Download Resume
              </a>
            </div>
          </m.div>
        </HideOverflow>

        <SkillFiles skills={skills} />
      </section>
    </TransitionContainer>
  );
}

export default About;
