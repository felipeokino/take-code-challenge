import { useState } from 'react';

import Button from '../Button';

import VehicleAccessories from './subComponents/VehicleAccessories';
import VehicleCharacteristics from './subComponents/VehicleCharacteristics';
import VehicleData from './subComponents/VehicleData';
import VehicleLocation from './subComponents/VehicleLocation';
import VehiclePrice from './subComponents/VehiclePrice';
import VehicleRate from './subComponents/VehicleRate';

export default function VehicleForm() {
  const [ vehicleInfo, setVehicleInfo ] = useState({
    data: {
      plate: 'abc1212',
      renavam: '1231231232',
      brand_name: { label: 'Nissan', value: 'nissan' },
      name:  { label: 'Sentra', value: 'sentra' },
      model_name: { label: 'S 2.0 16V FLEX 4P', value: 's2016v' },
      bodywork: { label: 'Sedan', value: 'sedan' },
      manufacturing_year: { label: '2014', value: '2014' },
      model_year: { label: '2015', value: '2015' },
      fuel_type: { label: 'Álcool/Gasolina', value: 'a/g' },
      gear_type: { label: 'Manual', value: 'MT' },
      mileage: 90000,
      color: { label: 'Prata', value: 'silver' },
    },
    accessories: {
      chips: []
    },
    characteristics: {
      chips: []
    },
    location: {
      state: '',
      city: ''
    },
    rate: {
      selectedClass: 'A',
      condition: 'Excelente',
      tags: [ { label: 'Conservado', value: 'conservado' } ]
    },
    price: {
      minValue: 56000,
      maxValue: 61000,
      kbbMin: 58000,
      kbbMax: 64000,
      particularValue: 52000
    }

  });

  const updateValues = (key: string, field: string, value: unknown) => {
    const copyVehicleInfo = { ...vehicleInfo[key as keyof typeof vehicleInfo] };
    setVehicleInfo({ ...vehicleInfo, [key]: {
      ...copyVehicleInfo,
      [field]: value
    } });
  };
  return (
    <div>
      <VehicleData vehicle={vehicleInfo.data} updateValues={updateValues}/>
      <VehicleAccessories accessories={vehicleInfo.accessories} updateValues={updateValues}/>
      <VehicleCharacteristics characteristics={vehicleInfo.characteristics} updateValues={updateValues}/>
      <VehicleLocation location={vehicleInfo.location} updateValues={updateValues}/>
            
      <VehicleRate rate={vehicleInfo.rate} updateValues={updateValues}/>
      <VehiclePrice price={vehicleInfo.price} updateValues={updateValues}/>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '24px 0' }}>
        <Button label='Salvar' variant='filled' />
      </div>
    </div>
  );
}