import styled from 'styled-components';

export const ChipsItemContainer = styled.span`
    border: 1px solid #0065FF;
    background-color: #0065FFcc;
    color: #FFFFFF;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 4px;
    border-radius: 6px;
    font-size: 12px;
    span {
        cursor: pointer;
        margin-left: 8px;
    }
    button {
        background: none;
    }
    img {
        filter: invert(1);
    }
`;