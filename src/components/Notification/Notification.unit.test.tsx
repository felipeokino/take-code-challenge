import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import Notification from '.';
test('should can see notification warning with count', async () => {
  const screen = render(<Notification />);

  const badge = await screen.findByTestId('notification-badge');

  expect(badge).toBeDefined();
});