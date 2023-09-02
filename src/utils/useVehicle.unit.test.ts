import { test, expect } from 'vitest';
import { renderHook } from '@testing-library/react-hooks'
import useVehicles from './useVehicles';
import { VehicleProps } from '../types/types.common';

type Teste = keyof VehicleProps
test('Should be get list of vehicles', async () => {  
  const { result, waitForNextUpdate } = renderHook(useVehicles)

  await waitForNextUpdate();
  
  expect(result.current.vehicles.length).toBeGreaterThan(0);
})
