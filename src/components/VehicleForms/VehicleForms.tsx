import { useState } from 'react';

import { VehicleType } from '../../pages/AddVehicle/mockVehicleData';
import Button from '../Button';

import VehicleAccessories from './subComponents/VehicleAccessories';
import VehicleCharacteristics from './subComponents/VehicleCharacteristics';
import VehicleData from './subComponents/VehicleData';
import VehicleLocation from './subComponents/VehicleLocation';
import VehiclePrice from './subComponents/VehiclePrice';
import VehicleRate from './subComponents/VehicleRate';

type VehicleFormProps = {
  vehicleSeed: VehicleType
  updateValues: (key: keyof VehicleType, field: string, value: unknown) => void

}
export default function VehicleForm({ vehicleSeed, updateValues }: VehicleFormProps) {

  return (
    <div>
      <VehicleData vehicle={vehicleSeed.data} updateValues={updateValues}/>
      <VehicleAccessories accessories={vehicleSeed.accessories} updateValues={updateValues}/>
      <VehicleCharacteristics characteristics={vehicleSeed.characteristics} updateValues={updateValues}/>
      <VehicleLocation location={vehicleSeed.location} updateValues={updateValues}/>
            
      <VehicleRate rate={vehicleSeed.rate} updateValues={updateValues}/>
      <VehiclePrice price={vehicleSeed.price} updateValues={updateValues}/>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '24px 0' }}>
        <Button label='Salvar' variant='filled' />
      </div>
    </div>
  );
}