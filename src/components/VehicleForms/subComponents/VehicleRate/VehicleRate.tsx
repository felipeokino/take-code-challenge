import { useState } from 'react';

import { VehicleType } from '../../../../pages/AddVehicle/mockVehicleData';
import { SelectOptionProps } from '../../../../types/types.common';
import Button from '../../../Button';
import Tags from '../../../Tags';
import Section from '../Section';
import { Row } from '../styles';

type VehicleRateProps = {
  rate: {
    condition: string
    selectedClass: string
    tags: SelectOptionProps[]
  }
  updateValues: (key: keyof VehicleType, field: string, value: unknown) => void
}
export default function VehicleRate({ rate:{ selectedClass, condition }, updateValues }: VehicleRateProps) {

  const [ tags, setTags ] = useState<SelectOptionProps[]>([]);
  const classificationButtons = [ 'A', 'B', 'C', 'D', 'E' ];
  const conditionsButtons = [ 'Razoável', 'Bom', 'Excelente' ];
  return (
    <>
      <Row justify='between'>
        <Section help title='Classificação'>
          <Row>
            {
              classificationButtons.map(button => (
                <Button 
                  key={button} 
                  rounded 
                  style={{ color: selectedClass === button ? '#FFF': '#000' }} 
                  label={button} 
                  variant={selectedClass === button ? 'filled': 'text'} 
                  onClick={() => updateValues('rate','selectedClass', button)}/>
              ))
            }
          </Row>
        </Section>
        <Section help title='Condição geral do veículo'>
          <Row>
            {
              conditionsButtons.map(button => (
                <Button 
                  key={button} 
                  rounded 
                  style={{ color: condition === button ? '#FFF': '#000' }} 
                  label={button} 
                  variant={condition === button ? 'filled': 'text'} 
                  onClick={() => updateValues('rate','condition', button)}/>
              ))
            }
          </Row>
        </Section>
      </Row>
      <Section title='Tags'>
        <Tags tags={tags} addTags={setTags} />
      </Section>
    </>
  );
}