import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string
    icon?: string
    variant: 'text' | 'filled'
}

export default function Button({ label, icon, variant }: ButtonProps) {
  return (
    <StyledButton variant={variant}>
      <img src={icon} alt="" />
      <span>{label}</span>
    </StyledButton>
  );
}