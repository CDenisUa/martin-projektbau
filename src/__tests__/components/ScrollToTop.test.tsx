import { render } from '@testing-library/react';
import ScrollToTop from '@/components/layout/ScrollToTop';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('ScrollToTop', () => {
  let scrollTo: jest.Mock;

  beforeEach(() => {
    scrollTo = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, writable: true });
    mockUsePathname.mockReturnValue('/en');
  });

  test('renders nothing', () => {
    const { container } = render(<ScrollToTop />);
    expect(container.firstChild).toBeNull();
  });

  test('scrolls to top on mount', () => {
    render(<ScrollToTop />);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'instant' });
  });

  test('scrolls to top when pathname changes', () => {
    const { rerender } = render(<ScrollToTop />);
    expect(scrollTo).toHaveBeenCalledTimes(1);

    mockUsePathname.mockReturnValue('/en/about');
    rerender(<ScrollToTop />);

    expect(scrollTo).toHaveBeenCalledTimes(2);
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'instant' });
  });

  test('does not scroll again on rerender with same pathname', () => {
    const { rerender } = render(<ScrollToTop />);
    rerender(<ScrollToTop />);
    // useEffect with dep on pathname only fires when pathname changes
    expect(scrollTo).toHaveBeenCalledTimes(1);
  });
});
