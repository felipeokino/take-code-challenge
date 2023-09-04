import styled, { css } from  'styled-components';

type SelectContainerProps = {
    bordered?: boolean
}
export const SelectContainer = styled.div<SelectContainerProps>`
    min-width: 260px;
    width: fit-content;
    border: 1px solid white;
    height: 38px;
    position: relative;
    display: flex;
    align-items: center;
    color: #000;
    gap: 4px;
    padding-left: 4px;
    box-sizing: border-box;
    border-radius: 6px;
    
    & > span.label {
        position: absolute;
        top: -10px;
        font-size: 10px;
        left: 12px;
        background-color: #FFFFFF;
        text-align: center;
    }
    & > span {
        font-weight: 500;
    }
    ${props => props.bordered && css`
        border: 1px solid #a3a3a3
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
    bottom: ${props => `${props.count * -35}px`};
    background: #FFF;
    width:  100%;
    transition: all 0.2s ease-in-out;
    border: 1px solid #a3a3a3;
    border-radius: 0 0 6px 6px;
    border-top: none;
    left: 0;
    z-index: 10;
`;

type OptionProps = {
    hidden?: boolean
}
export const Option = styled.span<OptionProps>`
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
    ${props => props.hidden && css`display: none`}
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