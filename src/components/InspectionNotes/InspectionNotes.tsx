import { ReactNode } from 'react';

import { VehicleType } from '../../pages/AddVehicle/mockVehicleData';

import { InspectionNotesContainer, Title } from './InspectionNotes.styles';
import InspectionTemplate from './InspectionTemplate';

interface InspectionNotesProps {
  children?: ReactNode
  vehicleSeed: VehicleType
  updateValues: (key: keyof VehicleType, field: string, value: unknown) => void

}

export default function InspectionNotes({ children, vehicleSeed, updateValues }: InspectionNotesProps) {
  
  const handleAdd = (id: number) => {
    if (vehicleSeed.inspection.notes.includes(id)) 
      updateValues('inspection', 'notes', vehicleSeed.inspection.notes.filter(sel => sel !== id));
    else
      updateValues('inspection', 'notes', [ ...vehicleSeed.inspection.notes, id ]);
      
  };

  return (
    <InspectionNotesContainer selecteds={vehicleSeed.inspection.notes}>
      <Title>Notas de inspeção</Title>
      
      <InspectionTemplate onAdd={handleAdd} />
      
      {children}
    </InspectionNotesContainer>
  );
}
