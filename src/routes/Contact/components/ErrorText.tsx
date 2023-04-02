type TErrorText = {
  name: string;
  message: string;
};

function ErrorText({ name, message }: TErrorText) {
  return (
    <p
      className='text-left text-sm text-error-dark'
      data-testid={`${name}-error`}
    >
      {message}
    </p>
  );
}

export default ErrorText;
