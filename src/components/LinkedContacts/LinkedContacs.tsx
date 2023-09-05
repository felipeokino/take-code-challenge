import { useState } from 'react';

import { VehicleType } from '../../pages/AddVehicle/mockVehicleData';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';

import { ContactCard,ContactsToModal,CreateNewContactContainer,LinkedContactsContainer, LinkedContactsFooter, Title } from './LinkedContacts.styles';

type LinkedContactsProps = {
    vehicleSeed: VehicleType
    updateValues: (key: keyof VehicleType, field: string, value: unknown) => void

}
export default function LinkedContacts({ vehicleSeed, updateValues }: LinkedContactsProps) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ action, setAction ] = useState<'showAll'|'createNew'>('showAll');
  const getInitials = (name: string) => {
    const [ firstName, lastName ] = name.split(' ');
    
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  };

  const handleAddContact = (name: string, email: string, phoneNumber: string) => {
    updateValues('contacts', 'persons', [ ...vehicleSeed.contacts.persons, { name, email, phoneNumber } ]);
  };
  
  const contactsList = vehicleSeed.contacts.persons.map(contact => (
    <ContactCard key={contact.phoneNumber}>
      <div>
        <span>{getInitials(contact.name)}</span>
      </div>
      <div>
        <span>{contact.name}</span>
        <span>{contact.phoneNumber}</span>
        <span>{contact.email}</span>
      </div>
    </ContactCard>
  ));
  
  const openModal = (act: 'showAll' | 'createNew') => {
    setAction(act);
    setModalIsOpen(true);
      
  };
  return (
    <>
      <Title>Contatos vinculados</Title>
      <LinkedContactsContainer>
        {contactsList}
      </LinkedContactsContainer>
      <LinkedContactsFooter>
        <Button label='Ver todos' variant='text' onClick={() => openModal('showAll')} />
        <Button label='Adicionar' variant='text' icon='plus' onClick={() => openModal('createNew')} />
      </LinkedContactsFooter>

      <Modal isOpen={modalIsOpen} handleClose={() => setModalIsOpen(false)}>
        {action === 'showAll' ? (

          <ContactsToModal>
            {contactsList}
          </ContactsToModal>
        ):(
          <AddNewContact handleAdd={handleAddContact} handleClose={() => setModalIsOpen(false)} />
        )
        }
      </Modal>
    </>
  );
}

type AddNewContactProps = {
  handleClose: () => void
  handleAdd:(arg1: string, arg2: string, arg3: string) => void
}
const AddNewContact = ({ handleClose, handleAdd }: AddNewContactProps) => {
  const [ name, setName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleFinish = () => {
    if (name && phoneNumber && email) {
      handleAdd(name, email, phoneNumber);
      handleClose();
    }
  };

  return (
    <CreateNewContactContainer>
      <Title> Criar novo contato</Title>
      <Input label='Nome'  onChange={(event) => setName(event.target.value)}/>
      <Input label='Telefone' onChange={(event) => setPhoneNumber(event.target.value)} />
      <Input label='E-mail'  onChange={(event) => setEmail(event.target.value)}/>
      <div>

        <Button label='Cancelar' variant='text' onClick={handleClose} />
        <Button label='Adicionar' icon='plus' variant='filled' onClick={handleFinish} />
      </div>
    </CreateNewContactContainer>
  );

};