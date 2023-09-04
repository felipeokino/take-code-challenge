import { useState } from 'react';

import Button from '../../components/Button';
import { Chips } from '../../components/Chips';
import Input from '../../components/Input';
import Select from '../../components/Select';
import VehicleForm from '../../components/VehicleForms/';

import { Container, ContainerRoot } from './NewVehicle.styles';

export default function NewVehicle() {

  return (
    <ContainerRoot>
      <Container>
        <VehicleForm />
      </Container>
      <Container>
        

      </Container>
    </ContainerRoot>
  );
}