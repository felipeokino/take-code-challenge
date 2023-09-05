import { ButtonHTMLAttributes } from 'react';

import { IconType } from '../../utils/icons';
import Icon from '../Icon';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string
    icon?: IconType
    variant: 'text' | 'filled'
    rounded?: boolean
}

export default function Button({ label, icon, variant, rounded,...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} rounded={rounded} {...props}>
      {icon && <Icon icon={icon} isButton={false} />}
      {label && <span>{label}</span>}
    </StyledButton>
  );
}