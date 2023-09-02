import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    font-size: 14px;
    margin: 10px 0 0;
    display: grid;
    color: #000;
    grid-template-columns: 50% 20% 20% 10%;
    cursor: pointer;
    &:first-of-type {
      color: #a3a3a3;
      cursor: default;
    }
`;

