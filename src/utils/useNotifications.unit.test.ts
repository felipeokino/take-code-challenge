import { renderHook } from '@testing-library/react-hooks';
import { expect,  test } from 'vitest';

import useNotifications from './useNotifications';
test('should I can see new notifications', async () => {
  const { result, waitForNextUpdate } = renderHook(useNotifications);

  await waitForNextUpdate();
  expect(result.current.notifications.length).toBeGreaterThan(0);
});

test('should I can see new notifications', async () => {
  const { result, waitForNextUpdate } = renderHook(useNotifications);

  await waitForNextUpdate();
  
  expect(result.current.notifications[0]).toHaveProperty('id');
  expect(result.current.notifications[0]).toHaveProperty('title');
  expect(result.current.notifications[0]).toHaveProperty('description');
  expect(result.current.notifications[0]).toHaveProperty('created_at');
});