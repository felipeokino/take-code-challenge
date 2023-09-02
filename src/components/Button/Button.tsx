import { ButtonHTMLAttributes } from 'react';

import { IconType } from '../../utils/icons';
import Icon from '../Icon';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string
    icon?: IconType
    variant: 'text' | 'filled'
}

export default function Button({ label, icon, variant }: ButtonProps) {
  return (
    <StyledButton variant={variant}>
      {icon && <Icon icon={icon} isButton={false} />}
      {label && <span>{label}</span>}
    </StyledButton>
  );
}