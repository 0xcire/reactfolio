import { domAnimation, LazyMotion, m } from 'framer-motion';
import SkillFiles from '../components/About/SkillTree';
import LinkBtn from '../components/LinkBtn';
import { aboutData } from '../data/data';

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function About() {
  const { heading, paragraphs, skills, cta } = aboutData;
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='min-h-[calc(100svh-(theme(height.header)+theme(height.footer)))] grid place-items-center text-text-dark'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <section
          id='about-me'
          className='padding-x py-12 h-[inherit] md:grid md:grid-cols-[1fr,2fr] 2xl:grid-cols-[0.75fr,2fr]'
        >
          <h1 className='text-2xl leading-none max-w-[600px] order-2'>
            {heading}
          </h1>
          <div>{''}</div>

          <div className='mt-8 text-wrapper max-w-[450px] xl:max-w-[650px] order-4 sm:text-base leading-relaxed 2xl:leading-relaxed'>
            {paragraphs.map((text, index) => (
              <p className='my-4' key={index}>
                {text}
              </p>
            ))}
            <LinkBtn url='/Contact' className='mt-6 block'>
              {cta}
            </LinkBtn>
          </div>
          <SkillFiles skills={skills} />
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default About;
