import { ReactNode } from 'react';

import Icon from '../../../Icon';

import { SectionContainer, SectionTitle } from './styles';

type SectionProps = {
    children: ReactNode
    title: string
    help?: boolean
}
export default function Section({ title, children, help = false }: SectionProps) {
  return (
    <SectionContainer>
      <SectionTitle>{title}{help && <Icon icon='help' isButton={false} />}</SectionTitle>
      {children}
    </SectionContainer>
  );
}