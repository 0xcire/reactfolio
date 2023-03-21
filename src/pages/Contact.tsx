import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import Form from '../components/Contact/Form';
import { contactData } from '../data/data';
import { link as TLink } from '../data/data';

// TODO: common, pull out
const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Contact() {
  const { heading, subheading, linksheading, links } = contactData;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        // TODO: address this contact form placement,
        // TODO: common min-h-[calc(100svh-(theme(header+footer)))]
        className='text-text-dark padding-x min-h-[calc(100svh-175px)] grid place-items-center'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <section className='md:flex md:justify-between text-center md:text-left'>
          <div className='md:w-6/12'>
            <h1 className='text-2xl mt-12 md:mt-0'>{heading}</h1>
            <div className='links'>
              <p className='sm:pr-6'>{subheading}</p>
              <h2 className='text-2xl mt-8'>{linksheading}</h2>

              {Object.keys(links).map((link, index) => (
                <Link
                  key={index}
                  to={links[link as keyof TLink].url ?? ''}
                  className='my-3 w-min mx-auto md:m-0 flex items-center justify-center md:justify-start'
                  target='_blank'
                >
                  <>
                    {links[link as keyof TLink].icon}
                    <p className='pl-1'>{link}</p>
                  </>
                </Link>
              ))}
            </div>
          </div>
          <Form />
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default Contact;
