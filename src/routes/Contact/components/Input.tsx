import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';
import ErrorText from './ErrorText';
import { InputFields } from './Form';

type TInput = {
  type?: string;
  name: 'name' | 'email' | 'message';
  Multiline?: boolean;
  placeholder: string;
  register: UseFormRegister<InputFields>;
  rules: RegisterOptions;
  errors: FieldErrors<InputFields>;
};

function Input({
  type,
  name,
  Multiline,
  placeholder,
  register,
  rules,
  errors,
}: TInput): JSX.Element {
  const errorMessage = errors[name]?.message;
  const hasError = !!(errors && errorMessage);

  return Multiline ? (
    <>
      <textarea
        className='contact-input resize-none'
        cols={20}
        rows={8}
        placeholder={placeholder}
        {...register(name, rules)}
      ></textarea>
      {hasError && <ErrorText name={name} message={errorMessage} />}
    </>
  ) : (
    <>
      <input
        className='contact-input'
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      {hasError && <ErrorText name={name} message={errorMessage} />}
    </>
  );
}

export default Input;
