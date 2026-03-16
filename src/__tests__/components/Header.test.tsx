import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/layout/Header';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'en',
}));

const mockUsePathname = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef(
        ({ children, initial, animate, exit, transition, ...props }: any, ref: any) =>
          React.createElement('div', { ...props, ref }, children),
      ),
    },
    AnimatePresence: ({ children }: any) => children,
  };
});

jest.mock('@/components/ui/LogoMark', () => () => <div data-testid="logo-mark" />);
jest.mock('@/components/ui/LanguageSelector', () => () => <div data-testid="language-selector" />);

jest.mock('next/link', () => {
  return function MockLink({ href, children, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe('Header', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/en');
  });

  test('renders logo', () => {
    render(<Header />);
    expect(screen.getByTestId('logo-mark')).toBeInTheDocument();
  });

  test('renders language selector', () => {
    render(<Header />);
    expect(screen.getByTestId('language-selector')).toBeInTheDocument();
  });

  test('renders all desktop nav links', () => {
    render(<Header />);
    // Keys from translation mock: 'home', 'services', 'about', 'contact'
    expect(screen.getByRole('link', { name: 'home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'about' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'contact' })).toBeInTheDocument();
  });

  test('nav links point to correct locale-prefixed hrefs', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'services' })).toHaveAttribute('href', '/en/services');
    expect(screen.getByRole('link', { name: 'about' })).toHaveAttribute('href', '/en/about');
  });

  test('mobile menu is hidden initially', () => {
    render(<Header />);
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  test('mobile menu opens on hamburger click', () => {
    render(<Header />);
    const toggleBtn = screen.getByRole('button', { name: /toggle mobile menu/i });
    fireEvent.click(toggleBtn);
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument();
  });

  test('mobile menu closes on second click', () => {
    render(<Header />);
    const toggleBtn = screen.getByRole('button', { name: /toggle mobile menu/i });
    fireEvent.click(toggleBtn);
    fireEvent.click(toggleBtn);
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });
});
