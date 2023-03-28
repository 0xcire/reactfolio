import { describe, test, expect, vi } from 'vitest';
import {
  cleanup,
  screen,
  render,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

const testData = {
  name: {
    valid: 'Eric',
    invalid: '',
  },
  email: {
    valid: 'ciredeveloper@gmail.com',
    invalid: 'ciredeveloper',
  },
  message: {
    valid: 'yoyoyo',
    invalid: '',
  },
};

describe('<Form /> behaves correctly', () => {
  const user = userEvent.setup();

  const mockSendFormData = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    render(<Form sendFormData={mockSendFormData} />);
  });

  afterEach(cleanup);

  test('onSubmit is called', async () => {
    const name = getNameInput() as HTMLInputElement;
    const email = getEmailInput();
    const message = getMessageInput();

    fireEvent.change(name, {
      target: {
        value: testData.name.valid,
      },
    });

    fireEvent.change(email, {
      target: {
        value: testData.email.valid,
      },
    });

    fireEvent.change(message, {
      target: {
        value: testData.message.valid,
      },
    });

    await waitFor(() => fireEvent.submit(getForm()));

    expect(mockSendFormData).toHaveBeenCalledWith({
      name: testData.name.valid,
      email: testData.email.valid,
      message: testData.message.valid,
    });

    expect(mockSendFormData).toBeCalledTimes(1);

    waitFor(() => {
      expect(name).toHaveValue('');
      expect(email).toHaveValue('');
      expect(message).toHaveValue('');
    });
  });

  test('name validation', async () => {
    await waitFor(() => {
      user.click(getNameInput());
      user.tab();
    });

    waitFor(() => expect(getNameErrorMsg()).toBeInTheDocument());

    await expectMockSubmitToNotBeCalled();
  });

  test('email validation', async () => {
    await waitFor(() => {
      user.type(getEmailInput(), testData.email.invalid);
      user.tab();
    });

    waitFor(() => expect(getEmailErrorMsg()).toBeInTheDocument());

    await expectMockSubmitToNotBeCalled();
  });

  test('message validation', async () => {
    await waitFor(() => {
      user.click(getMessageInput());
      user.tab();
    });

    waitFor(() => expect(getMessageErrorMsg()).toBeInTheDocument());

    await expectMockSubmitToNotBeCalled();
  });

  const getNameInput = () => screen.getByPlaceholderText('Name');

  const getEmailInput = () => screen.getByPlaceholderText('Email');

  const getMessageInput = () => screen.getByPlaceholderText('Message');

  const getForm = () => screen.getByTestId('form');

  const getNameErrorMsg = () => screen.getByTestId('name-error');

  const getEmailErrorMsg = () => screen.getByTestId('email-error');

  const getMessageErrorMsg = () => screen.getByTestId('message-error');

  const expectMockSubmitToNotBeCalled = async () => {
    await waitFor(() => fireEvent.submit(getForm()));
    expect(mockSendFormData).toBeCalledTimes(0);
  };
});
