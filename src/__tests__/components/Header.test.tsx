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
  const React = jest.requireActual<typeof import('react')>('react');
  const motionPropKeys = new Set(['initial', 'animate', 'exit', 'transition']);

  type MockMotionProps = React.PropsWithChildren<
    React.HTMLAttributes<HTMLDivElement> & {
      initial?: unknown;
      animate?: unknown;
      exit?: unknown;
      transition?: unknown;
    }
  >;

  const MotionDiv = React.forwardRef<HTMLDivElement, MockMotionProps>(function MotionDiv(
    { children, ...props },
    ref,
  ) {
    const domProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !motionPropKeys.has(key)),
    ) as React.HTMLAttributes<HTMLDivElement>;

    return React.createElement('div', { ...domProps, ref }, children);
  });

  function AnimatePresence({ children }: React.PropsWithChildren) {
    return React.createElement(React.Fragment, null, children);
  }

  return {
    motion: {
      div: MotionDiv,
    },
    AnimatePresence,
  };
});

jest.mock('@/components/ui/LogoMark', () => function MockLogoMark() {
  return <div data-testid="logo-mark" />;
});

jest.mock('@/components/ui/LanguageSelector', () => function MockLanguageSelector() {
  return <div data-testid="language-selector" />;
});

jest.mock('next/link', () => {
  const React = jest.requireActual<typeof import('react')>('react');

  type MockLinkProps = React.PropsWithChildren<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
  >;

  return function MockLink({ href, children, ...props }: MockLinkProps) {
    return React.createElement('a', { ...props, href }, children);
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
