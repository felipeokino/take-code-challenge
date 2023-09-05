import { MouseEvent, ReactNode } from 'react';

import Icon from '../../Icon';

import { ChipsItemContainer } from './ChipsItem.styles';

type ChipsItemProps = {
  children: ReactNode
  color?: string
  onDelete: (args1: MouseEvent<HTMLSpanElement>) => void
}
export default function ChipsItem({ children, onDelete }: ChipsItemProps) {
  return (
    <ChipsItemContainer >{children}<Icon color='white' icon='close' isButton onClick={onDelete} /></ChipsItemContainer>
  );
}