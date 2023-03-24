import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import Form from '../components/Contact/Form';
import { contactData } from '../data/data';
import { link as TLink } from '../data/data';
import { pageTransition, content } from '../data/data';

function Contact() {
  const { heading, subheading, linksheading, links } = contactData;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='text-text-dark padding-x min-h-[calc(100svh-175px)] grid place-items-center'
        variants={pageTransition}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{
          delayChildren: 0.15,
          staggerChildren: 0.1,
          staggerDirection: -1,
        }}
      >
        <section
          className='md:flex md:justify-between text-center md:text-left'
          data-testid='contact-section'
        >
          <div className='md:w-6/12'>
            <m.h1 className='text-2xl mt-12 md:mt-0' variants={content}>
              {heading}
            </m.h1>

            <m.p className='sm:pr-6' variants={content}>
              {subheading}
            </m.p>
            <m.h2 className='text-2xl mt-8' variants={content}>
              {linksheading}
            </m.h2>
            <m.div variants={content}>
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
            </m.div>
          </div>

          <Form />
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default Contact;
