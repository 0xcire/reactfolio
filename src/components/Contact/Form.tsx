import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { m } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { formData } from '../../data/data';
import { content } from '../../data/data';
// import { Mock } from 'vitest';

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

type TForm = {
  sendFormData: (data: Inputs) => Promise<Response>;
};

function Form({ sendFormData }: TForm) {
  const { noti, placeholder, cta } = formData;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await sendFormData(data);
      reset();
      if (!response.ok) {
        toast.error(noti.error);
      } else {
        toast.success(noti.success);
      }
    } catch (err) {
      toast.error(noti.error);
    }
    reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
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

      {/* <Input /> type text | text area | submit */}

      <form
        name='contact'
        method='POST'
        className='mt-8 md:mt-0'
        onSubmit={handleSubmit(onSubmit)}
        data-testid='form'
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
          {errors.name && (
            <p className='text-sm text-error-dark' data-testid='name-error'>
              {errors.name?.message}
            </p>
          )}
        </m.div>

        <m.div className='flex flex-col my-3' variants={content}>
          <input
            className='contact-input'
            type='text'
            placeholder={placeholder.email}
            {...register('email', { required: true })}
          />
          {errors.email && (
            <p className='text-sm text-error-dark' data-testid='email-error'>
              {errors.email?.message}
            </p>
          )}
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
          {/* <input
            type='text'
            className='contact-input h-24'
            id='message'
            placeholder={placeholder.message}
            {...register('message', { required: true })}
          /> */}
          {errors.message && (
            <p className='text-sm text-accent-dark' data-testid='message-error'>
              {errors.message.message}
            </p>
          )}
        </m.div>

        <m.button
          className='py-2 px-5 flex items-center rounded text-center bg-accent-dark text-text-light mx-auto'
          variants={content}
          type='submit'
          data-testid='submit-btn'
        >
          {cta.icon}
          {cta.text}
        </m.button>
      </form>
    </m.div>
  );
}

export default Form;
