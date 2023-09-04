import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import Pagination from '.';

test('should pagination render correctly', async () => {
  const screen = render(<Pagination count={30} currentPage={10} setPage={vi.fn()} />);

  const firstItem = await screen.findByText(/10/);
  const lastItem = await screen.findByText(/30/);

  const ellipses = await screen.findByText('...');

  expect(firstItem).toBeDefined();
  expect(lastItem).toBeDefined();
  expect(ellipses).toBeDefined();

  screen.unmount();
});

test('should pagination render correctly', async () => {
  const screen = render(<Pagination count={20} currentPage={15} setPage={vi.fn()} />);

  expect(await screen.findByText(/14/i)).toBeDefined();
  expect(await screen.findByText(/20/i)).toBeDefined();
  expect(screen.queryByText('...')).toBeNull();
});

