import { ButtonHTMLAttributes, Fragment } from 'react';

import { icons, IconType } from '../../utils/icons';

import { IconButton } from './Icon.styles';

type IconProps = {
  icon: IconType
  isButton: boolean
  stroke?: string
  fill?: string
  size?: number
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>

export default function Icon({ icon, isButton, stroke, fill, size, ...props }: IconProps) {
  const Element = isButton ? IconButton : Fragment;
  const IconElement = icons[icon];
  
  return (
    <Element {...props}>
      <IconElement stroke={stroke} fill={fill} size={size}/>
    </Element>
  );
}