import styled, { css } from  'styled-components';

type SelectContainerProps = {
    bordered?: boolean
}
export const SelectContainer = styled.div<SelectContainerProps>`
    min-height: 38px;
    min-width: 200px;
    width: max-content;
    border: 1px solid white;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    color: #000;
    font-size: 12px;
    font-weight: 600;
    & > span.label {
        position: absolute;
        top: -10px;
        font-size: 10px;
        left: 0;
        background-color: #FFFFFF;
        text-align: center;
        z-index: -1;
        font-weight: 500;
    }
    & > span {
        font-weight: 500;
        padding-left: 6px;
    }
    ${props => props.bordered && css`
        border: 1px solid #D1D1D1;
        border-radius: 6px;
    `}
`;

type SelectOptionProps = {
    isOpen: boolean,
    count: number
}
export const SelectOptions = styled.div<SelectOptionProps>`
    display: ${props => props.isOpen ?  'flex' : 'none' };
    flex-direction: column;
    height: auto;
    position: absolute;
    bottom: ${props => `${props.count * -30}px`};
    background: #FFF;
    width:  100%;
    transition: all 0.2s ease-in-out;
    border: 1px solid #a3a3a3;
    border-radius: 0 0 6px 6px;
    border-top: none;
    color: #000;
    z-index: 20;
    
`;

export const Option = styled.span`
    background-color: #FFF;
    position: relative;
    padding: 6px 4px;
    cursor: pointer;
    &:hover {
        background-color: var(--primary-blue-5);
        color: #FFFFFF;
    }
    &:last-of-type {
        border-radius: 0 0 6px 6px;
    }
`;

export const OpenButton = styled.div`
  position: absolute; 
  right: -0; 
  top: 50%;
  transform: translateY(-30%);
  width: 30px;
  border: 1px solid white;
  height: 30px;
`;