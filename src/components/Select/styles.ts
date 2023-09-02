import styled from  'styled-components';

export const SelectContainer = styled.div`
        min-width: 250px;
        width: fit-content;
        border: 1px solid white;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        & > span {
            font-weight: 500;
        }
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
    bottom: ${props => `${props.count * -40}px`};
    background: #FFF;
    width:  100%;
    transition: all 0.2s ease-in-out;
    border: 1px solid #a3a3a3;
    border-radius: 0 0 6px 6px;
    border-top: none;
`;

export const Option = styled.span`
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
 transform: translateY(-50%);
  width: 30px;
  border: 1px solid white;
  height: 30px;
`;