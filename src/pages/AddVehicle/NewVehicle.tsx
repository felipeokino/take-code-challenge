
import { useState } from 'react';

import ImageGrid from '../../components/ImageGrid';
import InspectionNotes from '../../components/InspectionNotes';
import LinkedContacts from '../../components/LinkedContacts';
import VehicleForm from '../../components/VehicleForms/';

import { initialValues, VehicleType } from './mockVehicleData';
import { Container, ContainerRoot } from './NewVehicle.styles';

export default function NewVehicle() {
  const [ vehicleSeed, setVehicleSeed ] = useState({ ...initialValues });

  const updateValues = (key: keyof VehicleType, field: string, value: unknown) => {
    const copyVehicleInfo = { ...vehicleSeed[key] };
    setVehicleSeed({ ...vehicleSeed, [key]: {
      ...copyVehicleInfo,
      [field]: value
    } });
  };
  return (
    <ContainerRoot>
      <Container>
        <VehicleForm vehicleSeed={vehicleSeed} updateValues={updateValues} />
      </Container>
      <Container>
        <InspectionNotes vehicleSeed={vehicleSeed} updateValues={updateValues} />
        <ImageGrid vehicleSeed={vehicleSeed} updateValues={updateValues} />
        <LinkedContacts vehicleSeed={vehicleSeed} updateValues={updateValues} />
      </Container>
    </ContainerRoot>  
  );
}
