import { VehicleType } from '../../../../pages/AddVehicle/mockVehicleData';
import { SelectOptionProps } from '../../../../types/types.common';
import Select from '../../../Select';
import Section from '../Section';
import { Row } from '../styles';

type VehicleLocationProps = {
  updateValues: (key: keyof VehicleType, field: string, value: unknown) => void
  location: {
    state: string
    city: string
  }
}
export default function VehicleLocation({ location: { state, city }, updateValues }: VehicleLocationProps) {
  const handleSelect = (key: string, value: SelectOptionProps) => { 
    updateValues('location', key, value.label);
  };
  return (
    <Section title='Localização'>
      <Row style={{ width: '100%' }}>
        <Select style={{ width: '40%' }} label='Estado' bordered options={[ { label: 'São Paulo', value: 'SP' } ]} selectValue={{ value: state, label: state }} handleClick={(event) => handleSelect('state', event)}/>
        <Select style={{ width: '100%' }} label='Cidade' bordered options={[ { label: 'Ribeirão Preto', value: 'RP' } ]} selectValue={{ value: city, label: city }} handleClick={(event) => handleSelect('city', event)}/>
      </Row>
    </Section>
  );
}
