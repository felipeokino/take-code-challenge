import { IconProps } from '../../../types/types.common';

const Analytics = ({ stroke = '#1D2C4B' }: IconProps) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group">
          <g id="Group_2">
            <path id="Path" d="M5 15.889L10.071 10.818C10.462 10.427 11.095 10.427 11.485 10.818L13.626 12.959C14.017 13.35 14.65 13.35 15.04 12.959L21 7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Path_2" d="M18.333 7H21V9.667" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Path_3" d="M21 20.929H1.92499V3.221" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </g>
      </svg>
    </>

  );
};

export default Analytics;