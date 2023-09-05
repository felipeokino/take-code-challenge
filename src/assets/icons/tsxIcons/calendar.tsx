import { IconProps } from '../../../types/types.common';

export default function Calendar({ stroke = '#1D2C4B' }: IconProps) {
  return (
    <>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon">
          <path id="Vector" d="M14 1V5" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Vector_2" d="M6 1V5" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Vector_3" d="M1 8H19" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Vector_4" d="M17 3H3C1.9 3 1 3.9 1 5V18C1 19.1 1.9 20 3 20H17C18.1 20 19 19.1 19 18V5C19 3.9 18.1 3 17 3Z" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    </>

  );
}