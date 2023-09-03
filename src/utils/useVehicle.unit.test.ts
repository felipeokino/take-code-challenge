import { renderHook } from '@testing-library/react-hooks';
import { expect, test } from 'vitest';

import useVehicles from './useVehicles';

test('Should be get list of vehicles', async () => {  
  const { result, waitForNextUpdate } = renderHook(useVehicles);

  await waitForNextUpdate();
  
  expect(result.current.vehicles.length).toBeGreaterThan(0);
});

test('Should be object have all properties', async () => {  
  const { result, waitForNextUpdate } = renderHook(useVehicles);

  await waitForNextUpdate();
  
  expect(result.current.vehicles[0]).toHaveProperty('evaluation_type');
  expect(result.current.vehicles[0]).toHaveProperty('version_uuid');
  expect(result.current.vehicles[0]).toHaveProperty('mileage');
  expect(result.current.vehicles[0]).toHaveProperty('model_year');
  expect(result.current.vehicles[0]).toHaveProperty('name');
  expect(result.current.vehicles[0]).toHaveProperty('transmission_type');
  expect(result.current.vehicles[0]).toHaveProperty('fuel_type');
  expect(result.current.vehicles[0]).toHaveProperty('vehicle_uuid');
  expect(result.current.vehicles[0]).toHaveProperty('model_name');
  expect(result.current.vehicles[0]).toHaveProperty('manufacturing_year');
  expect(result.current.vehicles[0]).toHaveProperty('version_name');
  expect(result.current.vehicles[0]).toHaveProperty('image');
  expect(result.current.vehicles[0]).toHaveProperty('brand_name');
  expect(result.current.vehicles[0]).toHaveProperty('ad_selling_price');
  expect(result.current.vehicles[0]).toHaveProperty('model_uuid');
  expect(result.current.vehicles[0]).toHaveProperty('brand_uuid');
  expect(result.current.vehicles[0]).toHaveProperty('plate');
  expect(result.current.vehicles[0]).toHaveProperty('reference');
  
});
