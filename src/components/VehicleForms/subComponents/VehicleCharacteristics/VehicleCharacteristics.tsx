import { useState } from 'react';

import { VehicleType } from '../../../../pages/AddVehicle/mockVehicleData';
import { SelectOptionProps } from '../../../../types/types.common';
import { Chips } from '../../../Chips';
import Section from '../Section';
import { Row } from '../styles';

import { characteristics } from './mockData';

type VehicleCharacteristicsProps = {
  characteristics: {
    chips: SelectOptionProps[]
  }
  updateValues: (key: keyof VehicleType, field: string, value: unknown) => void
}

export default function VehicleCharacteristics({ characteristics:{ chips }, updateValues }: VehicleCharacteristicsProps) {
  const [ options, setOptions ] = useState(characteristics);
  const addChip = (value: SelectOptionProps) => {
    const chip = value;
    updateValues('characteristics', 'chips', [ ...chips, chip ]);
    setOptions(options.map(option => option.value === chip.value ? ({ ...option, hide: true }) : option));
  };
  const deleteChip = (toDelete: SelectOptionProps) => {
    updateValues('characteristics', 'chips', chips.filter(chip => chip.value !== toDelete.value));
    setOptions(options.map(option => option.value === toDelete.value ? ({ ...option, hide: false }) : option));
  };

  return (
    <Section title='Características'>

      <Row>
        <Chips.Select label='Características' options={options} onClick={addChip} value={chips} onDelete={deleteChip} />  
      </Row>
    </Section>
  );
}
