import { VehicleType } from '../../../../pages/AddVehicle/mockVehicleData';
import { SelectOptionProps } from '../../../../types/types.common';
import { formatMileage } from '../../../../utils/format';
import Input from '../../../Input';
import Select from '../../../Select';
import Section from '../Section';
import { Row } from '../styles';

type VehicleDataProps = {
  vehicle: {
    plate: string
    renavam: string
    brand_name: SelectOptionProps
    name:  SelectOptionProps
    model_name: SelectOptionProps
    bodywork: SelectOptionProps
    manufacturing_year: SelectOptionProps
    model_year: SelectOptionProps
    fuel_type: SelectOptionProps
    gear_type: SelectOptionProps
    mileage: number
    color: SelectOptionProps
  }
  updateValues: (key: keyof VehicleType, field: string, value: unknown) => void
}
export default function VehicleData({ vehicle, updateValues }: VehicleDataProps){
  const handleSelect = (key: string, value: SelectOptionProps) => { 
    updateValues('location', key, value.label);
  };
  return (
    <Section title='Dados do veículo'>

      <Row className='row'>
        <Input value={vehicle.plate} label='Placa' onChange={(e) => updateValues('data', 'plate', e.target.value)}/>
        <Input value={vehicle.renavam} label='Renavam' onChange={(e) => updateValues('data', 'renavam', e.target.value)}/>
      </Row>
      <Row>
        <Select  label='Marca' bordered options={[ { label: 'Nissan', value: 'nissan' } ]} selectValue={vehicle.brand_name} handleClick={(event) => handleSelect('brand_name', event)}/>
        <Select  label='Modelo' bordered options={[ { label: 'Sentra', value: 'sentra' } ]} selectValue={vehicle.name} handleClick={(event) => handleSelect('name', event)}/>
      </Row>
      <Row>
        <Select  label='Carroceria' bordered options={[ { label: 'Sedan', value: 'sedan' } ]} selectValue={vehicle.bodywork} handleClick={(event) => handleSelect('bodywork', event)}/>
        <Row>
          <Select  style={{ minWidth: '95px' }} label='Ano fabricação' bordered options={[ { label: '2014', value: '2014' } ]} selectValue={vehicle.manufacturing_year} handleClick={(event) => handleSelect('manufacturing_year', event)}/>
          <Select  style={{ minWidth: '95px' }} label='Ano modelo' bordered options={[ { label: '2015', value: '2015' } ]} selectValue={vehicle.model_year} handleClick={(event) => handleSelect('model_year', event)}/>
        </Row>
      </Row>
      <Row>
        <Select  label='Versão' bordered options={[ { label: 'S 2.0 16V FLEX 140CV 4x2 2P', value: 's2.0' } ]} selectValue={vehicle.model_name} handleClick={(event) => handleSelect('model_name', event)}/>
      </Row>
      <Row>
        <Select  label='Combustível' bordered options={[ { label: 'Etanol/Gasolina', value: 'e/g' } ]} selectValue={vehicle.fuel_type} handleClick={(event) => handleSelect('fuel_type', event)}/>
        <Select  label='Câmbio' bordered options={[ { label: 'Manual', value: 'MT' }, { label: 'Automático', value: 'AT' } ]} selectValue={vehicle.gear_type} handleClick={(event) => handleSelect('gear_type', event)}/>
      </Row>
      <Row>
        <Input value={formatMileage(vehicle.mileage)} label='Quilometragem' onChange={(e) => updateValues('data', 'mileage', e.target.value)} />
        <Select  label='Cor' bordered options={[ { label: 'Prata', value: 'silver' } ]} selectValue={vehicle.color} handleClick={(event) => handleSelect('color', event)}/>
      </Row>
    </Section>
  );
}
