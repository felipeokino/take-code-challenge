import { IconProps } from '../../../types/types.common';

export default function Plus({ stroke = '#1D2C4B' }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <g id="Group_2">
          <path id="Path" d="M5.5 11H16.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Path_2" d="M11 5.5V16.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>

  );
}