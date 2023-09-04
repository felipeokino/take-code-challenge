import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    gap: 4px;
`;

type PaginationItemProps = {
    isActive?: boolean
    forwards?: boolean
    backwards?: boolean
}
export const PaginationItem = styled.div<PaginationItemProps>`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    color: #000;
    
    font-weight: 600;
    cursor: pointer;
   border-radius: 6px;
    ${props => props.isActive && css`
        background-color: var(--primary-blue-5);
        color: #FFFFFF;
    `}
    ${props => props.forwards && css`
        transform: rotate(-90deg);
    `}
    ${props => props.backwards && css`
        transform: rotate(90deg);
    `}
`;