import { ReactNode } from 'react';

import Icon from '../Icon';

import { ModalContent, ModalHeader,ModalRoot } from './Modal.styles';

type ModalProps = {
    isOpen: boolean
    handleClose: () => void
    children: ReactNode
}

export default function Modal({ isOpen, handleClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <ModalRoot>
      <ModalContent>
        <Icon id='close' icon='close' isButton onClick={handleClose} size={40}/>
        {children}
      </ModalContent>
    </ModalRoot>
  );
}