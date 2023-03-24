import { test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Form from './Form';

// via RHF
// test submission failure
// use waitFor util and find* queries to detech submission feedback; handleSubmit is async
// test validation associated with each input - change with zod?
// byRole query for diff elements because thats how users recognize UI component
// test successful submission

// const mockSubmission = jest.fn((name, email, message) => {
//   return Promise.resolve({ name, email, message });
// });

// it('should display required error when value is invalid', async () => {
//   render(<Form submission={mockSubmission} />);

//   fireEvent.submit(screen.getByRole('button'));
// });

// describe('form submit', () => {
//     test('')
// })

describe('<Form />', () => {
  test('The input field and its props', () => {
    render(<Form />);
    const input = document.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement | null;

    // input exists in the form component
    expect(input).toBeTruthy();

    // is empty
    expect(input?.textContent).toBe('');

    if (input) {
      // test the input text
      input.textContent = 'jane@doe.com';
      expect(input.textContent).toBe('jane@doe.com');

      // test the type prop
      expect(input.type).toBe('email');

      // test the name prop
      expect(input.name).toBe('email');

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: 'john@doe.com',
        },
      });
      expect(input.value).toBe('john@doe.com');

      // test the required prop with the jest-dom
      expect(input).toBeRequired();
    }
  });
});
