import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { m } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { formData } from '../../data/data';

const content = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.25,
    },
  },
};

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const schema = z.object({
  name: string().min(1, { message: formData.schema.name }),
  email: string().email(),
  message: string().min(1, { message: formData.schema.message }),
});

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key] as string)
    )
    .join('&');
};

function Form() {
  const { noti, placeholder, cta } = formData;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  // TODO: useSendFormData()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const attempt = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      });
      if (!attempt.ok) {
        toast.error(noti.error);
      } else {
        toast.success(noti.success);
      }
    } catch (error) {
      toast.error(noti.error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <m.div className='rounded mt-6 md:mt-0 md:w-6/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12'>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          style: {
            backgroundColor: '#f0ebd8',
            color: '#14213d',
          },
        }}
      />

      <form
        name='contact'
        method='POST'
        className='mt-8 md:mt-0'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type='hidden' name='form-name' value='contact' />
        <m.div
          className='flex flex-col my-3 md:my-0 relative'
          variants={content}
        >
          <input
            className='contact-input'
            type='text'
            placeholder={placeholder.name}
            {...register('name', { required: true })}
          />
          <p className='text-sm text-error-dark rounded bg-primary-dark/[0.9]'>
            {errors.name?.message}
          </p>
        </m.div>

        <m.div className='flex flex-col my-3' variants={content}>
          <input
            className='contact-input'
            type='text'
            placeholder={placeholder.email}
            {...register('email', { required: true })}
          />
          <p className='text-sm text-error-dark'>{errors.email?.message}</p>
        </m.div>

        <m.div className='flex flex-col my-3' variants={content}>
          <textarea
            className='contact-input resize-none'
            id='message'
            cols={20}
            rows={8}
            placeholder={placeholder.message}
            {...register('message', { required: true })}
          ></textarea>
          <p className='text-sm text-accent-dark'>{errors.message?.message}</p>
        </m.div>

        <m.button
          className='py-2 px-5 flex items-center rounded text-center bg-accent-dark text-text-light mx-auto'
          variants={content}
        >
          {cta.icon}
          {cta.text}
        </m.button>
      </form>
    </m.div>
  );
}

export default Form;
