import styled from 'styled-components';

export const Header = styled.div`
    background-color: #FFF;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    div {
        display: flex;
        gap: 8px;
    }

    div:first-child {
        gap: 2rem;
    }
`;

export const Title = styled.span`
    font-size: 1.5rem;
    font-weight: 600px;
    color: #000;
`;
