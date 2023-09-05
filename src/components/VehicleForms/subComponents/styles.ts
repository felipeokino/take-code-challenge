import styled, { css } from 'styled-components';

type RowProps = {
    justify?: 'between' | 'evenly' | 'around' | 'start' | 'end'
}
export const Row = styled.div<RowProps>`
    width: 100%;
    gap: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    ${props => props.justify && [ 'between', 'evenly', 'around' ].includes(props.justify) && css`justify-content: space-${props.justify}`}
    ${props => props.justify && [ 'start', 'end' ].includes(props.justify) && css`justify-content: flex-${props.justify}`}
`;