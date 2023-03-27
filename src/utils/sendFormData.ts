type Inputs = {
  name: string;
  email: string;
  message: string;
};

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key] as string)
    )
    .join('&');
};

export const sendFormData = async (data: Inputs) => {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...data }),
  });

  return response;
};
