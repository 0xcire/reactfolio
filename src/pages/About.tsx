import { domAnimation, LazyMotion, m } from 'framer-motion';
import SkillFiles from '../components/About/SkillTree';
import HideOverflow from '../components/Layout/HideOverflow';
import LinkBtn from '../components/LinkBtn';
import { aboutData } from '../data/data';
import { pageTransition, springReveal } from '../data/data';

function About() {
  const { heading, paragraphs, skills, cta } = aboutData;
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='min-h-[calc(100svh-(theme(height.header)+theme(height.footer)))] grid place-items-center text-text-dark'
        variants={pageTransition}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{
          delayChildren: 0.15,
          staggerChildren: 0.15,
        }}
      >
        <section
          id='about-me'
          className='padding-x py-12 h-[inherit] md:grid md:grid-cols-[1fr,2fr] 2xl:grid-cols-[0.75fr,2fr]'
          data-testid='about-section'
        >
          <HideOverflow className='order-2'>
            <m.h1
              className='text-2xl leading-none max-w-[600px]'
              variants={springReveal}
            >
              {heading}
            </m.h1>
          </HideOverflow>

          <div>{''}</div>

          <HideOverflow className='order-4 mt-8'>
            <m.div
              className='text-wrapper max-w-[450px] xl:max-w-[650px] sm:text-base leading-relaxed 2xl:leading-relaxed'
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
      </m.div>
    </LazyMotion>
  );
}

export default About;
