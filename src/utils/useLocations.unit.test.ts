import { renderHook } from '@testing-library/react-hooks';
import { expect,  test } from 'vitest';

import useLocations from './useLocations';
test('should I can see new notifications', async () => {
  const { result, waitForNextUpdate } = renderHook(useLocations);

  await waitForNextUpdate();
  expect(result.current.locations.length).toBeGreaterThan(0);
});

test('should object have all properties', async () => {
  const { result, waitForNextUpdate } = renderHook(useLocations);

  await waitForNextUpdate();
  expect(result.current.locations[0]).toHaveProperty('label');
  expect(result.current.locations[0]).toHaveProperty('value');
});