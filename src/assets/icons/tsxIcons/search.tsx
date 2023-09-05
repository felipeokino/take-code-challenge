import { IconProps } from '../../../types/types.common';

export default function Search({ stroke='#A3A3A3' }: IconProps) {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <path id="Oval" fillRule="evenodd" clipRule="evenodd" d="M9.21583 16.0943C12.4646 16.0943 15.0983 13.4606 15.0983 10.2118C15.0983 6.96298 12.4646 4.3293 9.21583 4.3293C5.96701 4.3293 3.33333 6.96298 3.33333 10.2118C3.33333 13.4606 5.96701 16.0943 9.21583 16.0943Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path id="Path" d="M16.6667 17.6625L13.375 14.3709" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>

  );
}