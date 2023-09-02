import styled, { css } from 'styled-components';

type StyledButtonProps = {
    variant: 'text' | 'filled';
};
export const StyledButton = styled.button<StyledButtonProps>`
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    outline: none;
    border: none;
    background-color: #FFFFFF;
    color: var(--primary-blue-5);
    
    ${props => props.variant === 'filled' && css`
        background-color: var(--primary-blue-5);
        color: #FFF;
    `}
`;