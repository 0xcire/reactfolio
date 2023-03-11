import { domAnimation, LazyMotion, m } from 'framer-motion';

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function About() {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='px-6 bg-primary-dark text-text-dark h-[calc(100vh-128.5px)]'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <h1>About</h1>
      </m.div>
    </LazyMotion>
  );
}

export default About;
