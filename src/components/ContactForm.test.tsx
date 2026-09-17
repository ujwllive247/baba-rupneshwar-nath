import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { LanguageProvider } from '@/context/LanguageProvider';
import { ContactForm } from './ContactForm';

function renderForm() {
  return render(
    <LanguageProvider>
      <ContactForm />
    </LanguageProvider>
  );
}

describe('ContactForm', () => {
  it('shows validation errors and does not submit when required fields are invalid', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(screen.getByRole('button', { name: /submit|भेजें/i }));

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('rejects a mobile number that does not match the Indian 10-digit pattern', async () => {
    const user = userEvent.setup();
    renderForm();

    const mobileInput = screen.getByLabelText(/mobile|मोबाइल/i);
    await user.type(mobileInput, '12345');
    await user.click(screen.getByRole('button', { name: /submit|भेजें/i }));

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(mobileInput).toHaveAttribute('aria-invalid', 'true');
  });

  it('accepts valid input and shows a success confirmation', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText(/name|नाम/i), 'Ram Kumar');
    await user.type(screen.getByLabelText(/mobile|मोबाइल/i), '9876543210');
    await user.type(screen.getByLabelText(/message|संदेश/i), 'This is a test message for the temple office.');
    await user.click(screen.getByRole('button', { name: /submit|भेजें/i }));

    expect(await screen.findByRole('status')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('returns to the empty form when "send another" is clicked after success', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText(/name|नाम/i), 'Ram Kumar');
    await user.type(screen.getByLabelText(/mobile|मोबाइल/i), '9876543210');
    await user.type(screen.getByLabelText(/message|संदेश/i), 'This is a test message for the temple office.');
    await user.click(screen.getByRole('button', { name: /submit|भेजें/i }));

    await user.click(await screen.findByRole('button', { name: /send another|दूसरा/i }));

    expect(screen.getByLabelText(/name|नाम/i)).toHaveValue('');
  });
});