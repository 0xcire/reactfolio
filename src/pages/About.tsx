import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import SkillFiles from '../components/SkillTree';

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function About() {
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
        {/* md:flex md:justify-between */}
        {/* className='w-[450px] xl:max-w-[600px]' */}
        <section
          id='about-me'
          className='mt-12 py-12 h-full md:grid md:grid-cols-[1fr,2fr] 2xl:grid-cols-[0.75fr,2fr]'
        >
          <h1 className='text-2xl leading-none max-w-[600px] order-2'>
            I&apos;m Eric Chi, a Boston based <b>Front End Developer</b> open to
            remote or relocation opportunities.
          </h1>
          <div>{''}</div>

          <div className='text-wrapper max-w-[450px] xl:max-w-[650px] order-4 text-[14px] leading-relaxed sm:text-base sm:leading-loose'>
            <p className='mt-12'>
              My stack of choice on the Front End is Tailwind, TypeScript, and
              React. The developer experience surrounding these technologies has
              been extremely enjoyable as of late. Especially coming from
              vanilla CSS and JavaScript. However, taking the time to learn the
              underlying technologies before the abstractions has made the
              transition easier, and I am confident I would be able to apply my
              skills to any tech stack if necessary.
            </p>
            <br />
            <p>
              Even though I have been focusing on the front end, understanding
              how an entire app functions has been a large source of motivation
              for me and transitioning into a full stack, or even purely back
              end developer is a goal of mine. Finding a company that could
              facilitate such growth would be ideal.
            </p>
            <br />
            <p>
              While not being completely engulfed in the tech world, you can
              find me in the gym, in nature, or going for a drive in my car or
              motorcycle. Generally just trying to lead an active lifestyle.
            </p>
            <br />
            <Link
              className='w-5/12 max-w-[250px] block p-3 rounded-md text-center text-text-light bg-accent-dark'
              to={`/Contact`}
            >
              Get In Touch
            </Link>
          </div>
          <SkillFiles />
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default About;
