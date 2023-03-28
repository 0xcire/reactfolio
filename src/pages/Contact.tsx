import { Link } from 'react-router-dom';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import Form from '../components/Contact/Form';
import { contactData } from '../data/data';
import { link as TLink } from '../data/data';
import { pageTransition, springReveal } from '../data/data';
import { sendFormData } from '../utils/sendFormData';
import HideOverflow from '../components/Layout/HideOverflow';

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
        }}
      >
        <section
          className='md:flex md:justify-between text-center md:text-left'
          data-testid='contact-section'
        >
          <div className='md:w-6/12'>
            <HideOverflow>
              <m.h1 className='text-2xl mt-12 md:mt-0' variants={springReveal}>
                {heading}
              </m.h1>
            </HideOverflow>

            <p className='sm:pr-6'>{subheading}</p>

            <HideOverflow>
              <m.h2 className='text-2xl mt-8' variants={springReveal}>
                {linksheading}
              </m.h2>
            </HideOverflow>

            <div>
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

          <Form sendFormData={sendFormData} />
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default Contact;
