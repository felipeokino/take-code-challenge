import { IconProps } from '../../../types/types.common';

export default function Collapse({ stroke='#1D2C4B' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <path id="Path" d="M15 8L11 12L15 16" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path id="Path_2" d="M8 8L8 16" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path id="Path_3" d="M19 12L11 12" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>

  );
}