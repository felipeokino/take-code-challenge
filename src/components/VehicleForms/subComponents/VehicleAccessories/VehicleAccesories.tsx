import { useState } from 'react';

import { SelectOptionProps } from '../../../../types/types.common';
import { Chips } from '../../../Chips';
import Section from '../Section';
import { Row } from '../styles';

import { accessories } from './mockData';

type VehicleAccessoriesProps = {
  accessories: {
    chips: SelectOptionProps[]
  }
  updateValues: (key: string, field: string, value: unknown) => void
}
export default function VehicleAccessories({ accessories:{ chips }, updateValues }: VehicleAccessoriesProps) {
  const [ options, setOptions ] = useState(accessories);
  const addChip = (value: {label: string, value: string}) => {
    const chip = value;
    updateValues('accessories', 'chips', [ ...chips, chip ]);
    setOptions(options.map(option => option.value === chip.value ? ({ ...option, hide: true }) : option));
  };
  const deleteChip = (toDelete: {label: string, value: string}) => {
    updateValues('accessories', 'chips', chips.filter(chip => chip.value !== toDelete.value));
    setOptions(options.map(option => option.value === toDelete.value ? ({ ...option, hide: false }) : option));
  };

  return (
    <Section title='Acessórios'>
      <Row>
        <Chips.Select label='Acessórios' options={options} onClick={addChip} value={chips} onDelete={deleteChip} />  
      </Row>
    </Section>
  );
}

