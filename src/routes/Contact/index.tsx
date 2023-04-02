import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

import TransitionContainer from '@/components/Layout/TransitionContainer';
import HideOverflow from '@/components/Layout/HideOverflow';
import Form from './components/Form';

import { sendFormData } from './utils/sendFormData';
import { contactData, link as TLink, springReveal } from '@/data/data';

function Contact() {
  const { heading, subheading, linksheading, links } = contactData;

  return (
    <TransitionContainer className='padding-x'>
      <section
        className='text-center md:flex md:justify-between md:text-left'
        data-testid='contact-section'
      >
        <div className='md:w-6/12'>
          <HideOverflow>
            <m.h1 className='mt-12 text-2xl md:mt-0' variants={springReveal}>
              {heading}
            </m.h1>
          </HideOverflow>

          <p className='sm:pr-6'>{subheading}</p>

          <HideOverflow>
            <m.h2 className='mt-8 text-2xl' variants={springReveal}>
              {linksheading}
            </m.h2>
          </HideOverflow>

          <div>
            {Object.keys(links).map((link, index) => (
              <Link
                key={index}
                to={links[link as keyof TLink].url ?? ''}
                className='my-3 mx-auto flex w-min items-center justify-center md:m-0 md:justify-start'
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
    </TransitionContainer>
  );
}

export default Contact;
