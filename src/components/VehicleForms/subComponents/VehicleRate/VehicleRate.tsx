import { useState } from 'react';

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
  updateValues: (key: string, field: string, value: unknown) => void
}
export default function VehicleRate({ rate:{ selectedClass, condition }, updateValues }: VehicleRateProps) {

  const [ tags, setTags ] = useState<SelectOptionProps[]>([]);
  return (
    <>
      <Row style={{ width: '100%' }} justify='between'>
        <Section help title='Classificação'>
          <Row>
            <Button style={{ color: selectedClass === 'A' ? '#FFF': '#000' }} label='A' variant={selectedClass === 'A' ? 'filled': 'text'} onClick={() => updateValues('rate','selectedClass', 'A')}/>
            <Button style={{ color: selectedClass === 'B' ? '#FFF': '#000' }} label='B' variant={selectedClass === 'B' ? 'filled': 'text'} onClick={() => updateValues('rate','selectedClass', 'B')}/>
            <Button style={{ color: selectedClass === 'C' ? '#FFF': '#000' }} label='C' variant={selectedClass === 'C' ? 'filled': 'text'} onClick={() => updateValues('rate','selectedClass', 'C')}/>
            <Button style={{ color: selectedClass === 'D' ? '#FFF': '#000' }} label='D' variant={selectedClass === 'D' ? 'filled': 'text'} onClick={() => updateValues('rate','selectedClass', 'D')}/>
            <Button style={{ color: selectedClass === 'E' ? '#FFF': '#000' }} label='E' variant={selectedClass === 'E' ? 'filled': 'text'} onClick={() => updateValues('rate','selectedClass', 'E')}/>
          </Row>
        </Section>
        <Section help title='Condição geral do veículo'>
          <Row>
            <Button style={{ color: condition === 'Razoável' ? '#FFF': '#000' }} label='Razoável' variant={condition === 'Razoável' ? 'filled': 'text'} onClick={() => updateValues('rate','condition', 'Razoável')}/>
            <Button style={{ color: condition === 'Bom' ? '#FFF': '#000' }} label='Bom' variant={condition === 'Bom' ? 'filled': 'text'} onClick={() => updateValues('rate','condition', 'Bom')}/>
            <Button style={{ color: condition === 'Excelente' ? '#FFF': '#000' }} label='Excelente' variant={condition === 'Excelente' ? 'filled': 'text'} onClick={() => updateValues('rate','condition', 'Excelente')}/>
          </Row>
        </Section>
      </Row>
      <Section title='Tags'>
        <Tags tags={tags} addTags={setTags} />
      </Section>
    </>
  );
}