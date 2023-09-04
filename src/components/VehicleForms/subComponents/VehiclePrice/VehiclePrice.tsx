import { useState } from 'react';

import { formatCurrency } from '../../../../utils/format';
import Input from '../../../Input';
import { Row } from '../styles';

import { VehiclePriceSection } from './VehiclePrice.styles';

type VehiclePriceProps = {
  price: {
    minValue: number
    maxValue: number
    kbbMin: number
    kbbMax: number
    particularValue: number
  }
  updateValues?: (key: string, field: string, value: unknown) => void
}
export default function VehiclePrice({ price:{ kbbMax, kbbMin, maxValue, minValue, particularValue } }: VehiclePriceProps) {
  
  return (
    <Row style={{ color: '#000', width: '100%' }}>
      <VehiclePriceSection>
        <Input value={formatCurrency(minValue)} />
        <Input value={formatCurrency(maxValue)} />
      </VehiclePriceSection>
      <VehiclePriceSection className='evaluation'>
        <div>
          <span>Faixa de preço KBB &trade;</span>
          <span>{formatCurrency(kbbMin)}-{formatCurrency(kbbMax)}</span>
        </div>
        <div>
          <span>Preço para Particular</span>
          <span>{formatCurrency(particularValue)}</span>
        </div>
      </VehiclePriceSection>
    </Row>
  );
}