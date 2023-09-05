import { IconProps } from '../../../types/types.common';

export default function Close({ stroke = '#1D2C4B', size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <g id="Group_2">
          <path id="Path" d="M5.33337 5.33331L10.6667 10.6666" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Path_2" d="M10.6667 5.33331L5.33337 10.6666" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>

  );
}