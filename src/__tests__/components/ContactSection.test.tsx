import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactSection from '@/components/sections/ContactSection';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef(
        ({ children, initial, animate, exit, transition, viewport, whileInView, ...props }: any, ref: any) =>
          React.createElement('div', { ...props, ref }, children),
      ),
    },
    useInView: () => true,
    AnimatePresence: ({ children }: any) => children,
  };
});

describe('ContactSection', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderSection() {
    return render(<ContactSection />);
  }

  // ── Rendering ──────────────────────────────────────────────────────────────

  test('renders the form with all input fields', () => {
    renderSection();
    expect(screen.getByPlaceholderText('namePlaceholder')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('emailPlaceholder')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('phonePlaceholder')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('messagePlaceholder')).toBeInTheDocument();
  });

  test('renders the submit button', () => {
    renderSection();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('renders contact info (email and address)', () => {
    renderSection();
    expect(screen.getByRole('link', { name: /info@martinprojektgroup\.ch/i })).toBeInTheDocument();
    expect(screen.getByText('Switzerland')).toBeInTheDocument();
  });

  // ── Validation ─────────────────────────────────────────────────────────────

  test('shows all field errors when submitting empty form', async () => {
    renderSection();
    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText('errorName')).toBeInTheDocument();
      expect(screen.getByText('errorEmail')).toBeInTheDocument();
      expect(screen.getByText('errorPhone')).toBeInTheDocument();
      expect(screen.getByText('errorMessage')).toBeInTheDocument();
    });
  });

  test('shows name error on blur with short name', async () => {
    renderSection();
    const input = screen.getByPlaceholderText('namePlaceholder');
    await userEvent.type(input, 'A');
    fireEvent.blur(input);
    await waitFor(() => {
      expect(screen.getByText('errorName')).toBeInTheDocument();
    });
  });

  test('shows email error on blur with invalid email', async () => {
    renderSection();
    const input = screen.getByPlaceholderText('emailPlaceholder');
    await userEvent.type(input, 'notvalid');
    fireEvent.blur(input);
    await waitFor(() => {
      expect(screen.getByText('errorEmail')).toBeInTheDocument();
    });
  });

  test('clears error when valid value is entered after blur', async () => {
    renderSection();
    const input = screen.getByPlaceholderText('namePlaceholder');
    await userEvent.type(input, 'A');
    fireEvent.blur(input);
    await waitFor(() => expect(screen.getByText('errorName')).toBeInTheDocument());

    await userEvent.clear(input);
    await userEvent.type(input, 'John Doe');
    await waitFor(() => expect(screen.queryByText('errorName')).not.toBeInTheDocument());
  });

  test('does not submit form with invalid fields', async () => {
    renderSection();
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    expect(global.fetch).not.toHaveBeenCalled();
  });

  // ── Submission ─────────────────────────────────────────────────────────────

  async function fillAndSubmit() {
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText('namePlaceholder'), 'John Doe');
    await user.type(screen.getByPlaceholderText('emailPlaceholder'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('phonePlaceholder'), '+41 44 123 45 67');
    await user.type(screen.getByPlaceholderText('messagePlaceholder'), 'Hello world inquiry');
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
  }

  test('calls /api/contact with form data on valid submit', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
    renderSection();
    await fillAndSubmit();
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/contact',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }),
      );
    });
    const body = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
    expect(body.name).toBe('John Doe');
    expect(body.email).toBe('john@example.com');
  });

  test('shows success message after successful submission', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
    renderSection();
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByText('successMessage')).toBeInTheDocument();
    });
  });

  test('hides form after successful submission', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
    renderSection();
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('namePlaceholder')).not.toBeInTheDocument();
    });
  });

  test('shows server error when API returns non-ok response', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });
    renderSection();
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByText('errorServer')).toBeInTheDocument();
    });
  });

  test('shows server error when fetch throws', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('network'));
    renderSection();
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByText('errorServer')).toBeInTheDocument();
    });
  });
});
