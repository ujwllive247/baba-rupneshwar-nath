import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LanguageProvider } from '@/context/LanguageProvider';
import { STORAGE_KEY } from '@/i18n';
import { AppRoutes } from '@/routes/AppRoutes';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </MemoryRouter>
  );
}

beforeEach(() => window.localStorage.setItem(STORAGE_KEY, 'en'));
afterEach(() => {
  window.localStorage.clear();
  window.sessionStorage.clear();
});

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/^Full name/), 'Ram Kumar');
  await user.type(screen.getByLabelText(/^Mobile number/), '9876543210');
  await user.click(screen.getByLabelText(/I agree that the temple/));
}

describe('Donate landing page', () => {
  it('shows the campaign, labelled sample figures and the demo notice', async () => {
    renderAt('/donate');
    expect(await screen.findByRole('heading', { level: 1, name: /Be part of building/ })).toBeInTheDocument();
    expect(screen.getByText('Sample figures')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'Construction fund progress' })).toHaveAttribute('aria-valuenow');
    expect(screen.getByText('DEMO / TEST PAYMENT')).toBeInTheDocument();
    expect(screen.queryByText(/80G|tax[- ]deductible/i)).not.toBeInTheDocument();
  });

  it('blocks submit with linked, announced errors and focuses the summary', async () => {
    const user = userEvent.setup();
    renderAt('/donate');
    await user.click(await screen.findByRole('button', { name: /Proceed to payment/ }));

    const summary = screen.getByRole('alert');
    expect(summary).toHaveFocus();
    expect(within(summary).getByText(/valid 10-digit/)).toBeInTheDocument();
    const mobile = screen.getByLabelText(/^Mobile number/);
    expect(mobile).toHaveAttribute('aria-invalid', 'true');
    expect(mobile.getAttribute('aria-describedby')).toContain('-error');
  });

  it('validates the custom amount range', async () => {
    const user = userEvent.setup();
    renderAt('/donate');
    await user.type(await screen.findByLabelText('Or enter another amount'), '5');
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Proceed to payment/ }));
    expect(within(screen.getByRole('alert')).getByText(/Choose an amount, or enter one between/)).toBeInTheDocument();
  });

  it('preset amounts are a keyboard-operable radio group', async () => {
    const user = userEvent.setup();
    renderAt('/donate');
    const group = await screen.findByRole('group', { name: 'Donation amount' });
    const radios = within(group).getAllByRole('radio');
    expect(radios).toHaveLength(6);
    await user.click(radios[0]);
    await user.keyboard('{ArrowRight}');
    expect(radios[1]).toBeChecked();
    expect(screen.getByRole('button', { name: /Proceed to payment · ₹251/ })).toBeInTheDocument();
  });
});

describe('Demo payment flow', () => {
  it('goes form → demo payment → failure → retry → Seva Confirmation', async () => {
    const user = userEvent.setup();
    renderAt('/donate');
    await screen.findByRole('heading', { level: 1 });
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Proceed to payment · ₹501/ }));

    // Payment page: demo labelled, pending — reaching it is not success.
    expect(await screen.findByRole('heading', { level: 1, name: 'Complete your seva' })).toBeInTheDocument();
    expect(screen.getByText('DEMO / TEST PAYMENT')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /not a real payment code/ })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Waiting for payment');

    await user.click(screen.getByRole('button', { name: 'Simulate failed payment' }));
    expect(screen.getByRole('status')).toHaveTextContent('Verifying payment');
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Payment not completed'), { timeout: 4000 });

    await user.click(screen.getByRole('button', { name: 'Try again' }));
    await user.click(await screen.findByRole('button', { name: 'Simulate successful payment' }));

    const heading = await screen.findByRole('heading', { level: 1, name: 'Thank you, Ram Kumar' }, { timeout: 4000 });
    expect(heading).toHaveFocus();
    expect(screen.getByText('Seva Confirmation')).toBeInTheDocument();
    expect(screen.getByText('DEMO — no payment was made')).toBeInTheDocument();
    expect(screen.getByText('Successful (simulated — no money collected)')).toBeInTheDocument();
    expect(screen.getByText('To be issued by the temple office')).toBeInTheDocument();
    expect(screen.getByText(/^BRN-DEMO-\d{8}-/)).toBeInTheDocument();
  }, 15000);

  it('cancels from the payment page with an inline confirmation', async () => {
    const user = userEvent.setup();
    renderAt('/donate');
    await screen.findByRole('heading', { level: 1 });
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Proceed to payment/ }));
    await user.click(await screen.findByRole('button', { name: 'Cancel donation' }));
    await user.click(screen.getByRole('button', { name: 'Yes, cancel' }));
    expect(await screen.findByText('Donation cancelled')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Start a new donation' })).toHaveAttribute('href', '/donate');
  });

  it('never shows a confirmation for an unknown or malformed donation', async () => {
    renderAt('/donate/confirmation/BRN-DEMO-20260101-ZZZZZZ');
    expect(await screen.findByRole('heading', { name: 'Donation not found' })).toBeInTheDocument();
    renderAt('/donate/payment/not-an-id');
    expect((await screen.findAllByRole('heading', { name: 'Donation not found' })).length).toBeGreaterThan(0);
  });
});
