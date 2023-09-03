import { render } from '@testing-library/react';
import { expect,test } from 'vitest';

import { VehicleProps } from '../../types/types.common';
import { formatCurrency } from '../../utils/format';

import VehicleCard from '.';

const mockVehicle: VehicleProps = {
  evaluation_type: 'presential',
  version_uuid: 'mockId',
  mileage: 89541,
  model_year: 2014,
  name: 'EXL 2.0 16V FLEX 155CV 4x2 4P',
  transmission_type: 'Automático',
  fuel_type: 'Etanol/Gasolina',
  vehicle_uuid: 'mockVehicleId',
  model_name: 'CR-V',
  manufacturing_year: 2014,
  version_name: 'EXL 2.0 16V FLEX',
  image: 'https://d3istz5qdrltsq.cloudfront.net/inventory/images/vehicles/14ada4a4-7033-4b1f-9578-8a654b711d70/showroom/external/front_right_10x.jpeg',
  brand_name: 'HONDA',
  ad_selling_price: 69900.0000,
  model_uuid: 'modelId',
  brand_uuid: 'brandId',
  plate: 'abc1234',
  reference: '12b4h31jjk2'
};
test('should can generate vehicle card', async () => {
  const screen = render(<VehicleCard vehicle={mockVehicle} />);

  const cardTitle = await screen.findByText(`${mockVehicle.brand_name} ${mockVehicle.model_name}`);
  expect(cardTitle).toBeDefined();

  const vehicleName = await screen.findByText(`${mockVehicle.name}`);
  expect(vehicleName).toBeDefined();
  
  const yearInfo = await screen.findByText(`${mockVehicle.manufacturing_year}/${mockVehicle.model_year} ${mockVehicle.fuel_type}`);
  expect(yearInfo).toBeDefined();

  const mileage = await screen.findByText(`${mockVehicle.mileage}`);
  expect(mileage).toBeDefined();

  const price = await screen.findByText(`${formatCurrency(mockVehicle.ad_selling_price)}`);
  expect(price).toBeDefined();
});