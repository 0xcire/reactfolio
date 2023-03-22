import { domAnimation, LazyMotion, m } from 'framer-motion';
import SkillFiles from '../components/About/SkillTree';
import LinkBtn from '../components/LinkBtn';
import { aboutData } from '../data/data';
import { pageTransition, content } from '../data/data';

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
        >
          <div className='order-2 overflow-hidden'>
            <m.h1
              className='text-2xl leading-none max-w-[600px]'
              variants={content}
            >
              {heading}
            </m.h1>
          </div>
          <div>{''}</div>

          <m.div
            className='mt-8 text-wrapper max-w-[450px] xl:max-w-[650px] order-4 sm:text-base leading-relaxed 2xl:leading-relaxed'
            variants={content}
          >
            {paragraphs.map((text, index) => (
              <p className='my-4' key={index}>
                {text}
              </p>
            ))}
            <LinkBtn url='/Contact' className='mt-6 block' variants={content}>
              {cta}
            </LinkBtn>
          </m.div>
          {/* <LinkBtn url='/Contact' className='mt-6 block' variants={content}>
            {cta}
          </LinkBtn> */}
          <SkillFiles skills={skills} />
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default About;
