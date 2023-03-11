import { domAnimation, LazyMotion, m } from 'framer-motion';

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Contact() {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='text-text-dark px-6'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <h1>Contact</h1>
      </m.div>
    </LazyMotion>
  );
}

export default Contact;
