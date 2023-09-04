import { ButtonHTMLAttributes, Fragment } from 'react';

import { icons } from '../../utils/icons';

import { IconButton } from './Icon.styles';

type IconProps = {
    icon: keyof typeof icons
    isButton: boolean
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>

export default function Icon({ icon, isButton, ...props }: IconProps) {
  const Element = isButton ? IconButton : Fragment;
  return (
    <Element {...props}>
      <img src={icons[icon]} />
    </Element>
  );
}