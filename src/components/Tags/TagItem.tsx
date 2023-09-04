import { MouseEvent, ReactNode } from 'react';

import Icon from '../Icon';

import { TagItemContainer } from './TagItem.styles';

type TagItemProps = {
    children: ReactNode
    onDelete: (args1: MouseEvent<HTMLSpanElement>) => void
}
export default function TagItem({ children, onDelete }: TagItemProps) {
  return (
    <TagItemContainer>
      <Icon icon='close' isButton onClick={onDelete}/>
      {children}
    </TagItemContainer>
  );

}