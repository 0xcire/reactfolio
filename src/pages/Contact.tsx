import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  PaperPlaneTilt,
} from '@phosphor-icons/react';

{
  /* <GithubLogo size={32} /> */
}
{
  /* <LinkedinLogo size={32} /> */
}
{
  /* <At size={32} /> */
}

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const schema = z.object({
  name: string().min(1, { message: 'Please enter your name' }),
  email: string().email(),
  body: string().min(1, { message: 'Please include a message' }),
});

type Inputs = {
  'form-name': string;
  name: string;
  email: string;
  body: string;
};

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key] as string)
    )
    .join('&');
};

function Contact() {
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    setFormData({ name: data.name, email: data.email, message: data.body });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => console.log('success!'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        body: '',
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='text-text-dark px-6 sm:px-12 lg:px-48 xl:px-60 2xl:px-96'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <section className='md:h-full md:mt-24 lg:mt-36 xl:mt-42 md:flex md:justify-between text-center md:text-left'>
          <div className='md:w-6/12'>
            <h1 className='text-2xl mt-12 md:mt-0'>Contact me</h1>
            <div className='links'>
              <p>
                Please get in touch if you believe I would be a good fit for
                your company.
              </p>
              <h2 className='text-2xl mt-8'>Additional Links</h2>

              <Link
                className='my-3 w-min mx-auto md:m-0 flex items-center justify-center md:justify-start'
                to='https://github.com/0xcire'
                target='_blank'
              >
                <GithubLogo size={20} />
                <p className='pl-1'>Github</p>
              </Link>

              <Link
                className='my-3 w-min mx-auto md:m-0 flex items-center justify-center md:justify-start'
                to='https://www.linkedin.com/in/ericchi1/'
                target='_blank'
              >
                <LinkedinLogo size={20} />
                <p className='pl-1'>Linkedin</p>
              </Link>

              <Link
                className='my-3 w-min mx-auto md:m-0 flex items-center justify-center md:justify-start'
                to='mailto:ciredeveloper@gmail.com'
                target='_blank'
              >
                <EnvelopeSimple size={20} />
                <p className='pl-1'>ciredeveloper@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className='form rounded mt-6 md:mt-0 md:w-5/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12'>
            <form
              name='contact'
              method='POST'
              className='mt-8 md:mt-0'
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type='hidden' name='form-name' value='contact' />
              <div className='flex flex-col my-3 md:my-0 relative'>
                <input
                  className='px-2 py-3 rounded bg-[#3e5c76] text-text-dark placeholder:text-text-dark focus:outline focus: outline-1 focus:outline-text-dark'
                  type='text'
                  placeholder='Name'
                  {...register('name', { required: true })}
                />
                <p className='text-sm text-error-dark rounded bg-primary-dark/[0.9]'>
                  {errors.name?.message}
                </p>
              </div>

              <div className='flex flex-col my-3'>
                <input
                  className='px-2 py-3 rounded bg-[#3e5c76] text-text-dark  placeholder:text-text-dark focus:outline focus: outline-1 focus:outline-text-dark'
                  type='text'
                  placeholder='Email'
                  {...register('email', { required: true })}
                />
                <p className='text-sm text-error-dark'>
                  {errors.email?.message}
                </p>
              </div>

              <div className='flex flex-col my-3'>
                <textarea
                  className='p-2 rounded bg-[#3e5c76] text-text-dark  placeholder:text-text-dark focus:outline focus: outline-1 focus:outline-text-dark resize-none'
                  id='body'
                  cols={20}
                  rows={8}
                  placeholder='Message'
                  {...register('body', { required: true })}
                ></textarea>
                <p className='text-sm text-accent-dark'>
                  {errors.body?.message}
                </p>
              </div>

              <button className='py-2 px-6 flex items-center rounded text-center bg-accent-dark text-text-light mx-auto'>
                <PaperPlaneTilt size={20} />
                Send
              </button>
            </form>
          </div>
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default Contact;
