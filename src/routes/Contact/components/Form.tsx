import { useEffect } from 'react';
import { m } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import HideOverflow from '@/components/Layout/HideOverflow';
import Input from './Input';

import { formData, springReveal } from '@/data/data';

export type InputFields = {
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
  sendFormData: (data: InputFields) => Promise<Response>;
};

function Form({ sendFormData }: TForm) {
  const { noti, placeholder, cta } = formData;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<InputFields>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<InputFields> = async (data) => {
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
    <m.div className='mt-6 rounded md:mt-0 md:w-6/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12'>
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
        data-testid='form'
      >
        <input type='hidden' name='form-name' value='contact' />
        <HideOverflow>
          <m.div
            className='relative my-3 flex flex-col md:my-0'
            variants={springReveal}
          >
            <Input
              type='text'
              name='name'
              placeholder={placeholder.name}
              register={register}
              rules={{ required: true }}
              errors={errors}
            />
          </m.div>
        </HideOverflow>

        <HideOverflow>
          <m.div className='my-3 flex flex-col' variants={springReveal}>
            <Input
              type='text'
              name='email'
              placeholder={placeholder.email}
              register={register}
              rules={{ required: true }}
              errors={errors}
            />
          </m.div>
        </HideOverflow>

        <HideOverflow>
          <m.div className='flex flex-col' variants={springReveal}>
            <Input
              Multiline={true}
              name='message'
              placeholder={placeholder.message}
              register={register}
              rules={{ required: true }}
              errors={errors}
            />
          </m.div>
        </HideOverflow>

        <HideOverflow className='mt-3'>
          <m.button
            className='mx-auto flex items-center rounded bg-accent-dark py-2 px-5 text-center text-text-light'
            variants={springReveal}
            type='submit'
          >
            {cta.icon}
            {cta.text}
          </m.button>
        </HideOverflow>
      </form>
    </m.div>
  );
}

export default Form;
