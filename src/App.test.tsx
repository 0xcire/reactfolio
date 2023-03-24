import { describe, test, expect } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App renders appropriate routes', () => {
  const user = userEvent.setup();
  afterEach(cleanup);

  test('App renders Home', async () => {
    render(<App />, { wrapper: MemoryRouter });

    expect(screen.queryByTestId('home-section')).toBeInTheDocument();
  });

  test('App renders Portfolio', async () => {
    render(<App />, { wrapper: MemoryRouter });

    await waitFor(() => user.click(screen.getByTestId('Portfolio')));

    await waitFor(() =>
      expect(screen.getByTestId('portfolio-section')).toBeInTheDocument()
    );
  });

  test('App renders About', async () => {
    render(<App />, { wrapper: MemoryRouter });

    await waitFor(() => user.click(screen.getByTestId('About')));

    await waitFor(() => {
      expect(screen.getByTestId('about-section')).toBeInTheDocument();
    });
  });

  test('App renders Contact', async () => {
    render(<App />, { wrapper: MemoryRouter });

    await waitFor(() => user.click(screen.getByTestId('Contact')));

    await waitFor(() => {
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    });
  });

  test('App handles bad routes', async () => {
    render(
      <MemoryRouter initialEntries={['/bad']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByTestId('_404')).toBeInTheDocument());
  });
});
