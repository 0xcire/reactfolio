import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import SkillFiles from '../components/About/SkillTree';
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
      {/* xl:px-72 */}
      <m.div
        className='px-6 sm:px-12 lg:px-28 xl:px-0 xl:w-8/12 2xl:w-6/12 xl:mx-auto text-text-dark'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <section
          id='about-me'
          className='mt-12 py-12 h-full md:grid md:grid-cols-[1fr,2fr] 2xl:grid-cols-[0.75fr,2fr]'
        >
          <h1 className='text-2xl leading-none max-w-[600px] order-2'>
            {heading}
          </h1>
          <div>{''}</div>

          <div className='mt-12 text-wrapper max-w-[450px] xl:max-w-[650px] order-4 text-[14px] leading-relaxed sm:text-base sm:leading-loose'>
            {paragraphs.map((text, index) => (
              <p className='my-4' key={index}>
                {text}
              </p>
            ))}
            {/* TODO: common link btn styles */}
            <Link
              className='mt-6 w-5/12 max-w-[250px] block p-3 rounded-md text-center text-text-light bg-accent-dark'
              to={`/Contact`}
            >
              {cta}
            </Link>
          </div>
          <SkillFiles skills={skills} />
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default About;
