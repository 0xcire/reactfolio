import { describe, test, expect } from 'vitest';
import {
  cleanup,
  render,
  screen,
  waitFor,
  Matcher,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App renders appropriate routes', () => {
  const user = userEvent.setup();

  afterEach(cleanup);

  test('App renders Home', async () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(await findHomePage()).toBeInTheDocument();

    expectOtherPagesNotInDisplay([
      'portfolio-section',
      'about-section',
      'contact-section',
    ]);
  });

  test('App renders Portfolio', async () => {
    render(<App />, { wrapper: MemoryRouter });
    await waitFor(() => user.click(PortfolioLink()));

    expect(await findPortfolioPage()).toBeInTheDocument();

    expectOtherPagesNotInDisplay([
      'home-section',
      'about-section',
      'contact-section',
    ]);
  });

  test('App renders About', async () => {
    render(<App />, { wrapper: MemoryRouter });
    await waitFor(() => user.click(AboutLink()));

    expect(await findAboutPage()).toBeInTheDocument();

    expectOtherPagesNotInDisplay([
      'home-section',
      'portfolio-section',
      'contact-section',
    ]);
  });

  test('App renders Contact', async () => {
    render(<App />, { wrapper: MemoryRouter });
    await waitFor(() => user.click(ContactLink()));

    expect(await findContactPage()).toBeInTheDocument();

    expectOtherPagesNotInDisplay([
      'home-section',
      'portfolio-section',
      'about-section',
    ]);
  });

  test('App handles bad routes', async () => {
    render(
      <MemoryRouter initialEntries={['/bad']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByTestId('_404')).toBeInTheDocument());
  });

  const PortfolioLink = () => screen.getByTestId('Portfolio');

  const AboutLink = () => screen.getByTestId('About');

  const ContactLink = () => screen.getByTestId('Contact');

  const findHomePage = async () => await screen.findByTestId('home-section');

  const findPortfolioPage = async () =>
    await screen.findByTestId('portfolio-section');

  const findAboutPage = async () => await screen.findByTestId('about-section');

  const findContactPage = async () =>
    await screen.findByTestId('contact-section');

  const expectOtherPagesNotInDisplay = (pages: string[]) => {
    for (let i = 0; i < pages.length; i++) {
      expect(screen.queryByTestId(pages[i] as Matcher)).toBeNull();
    }
  };
});
