import styled from 'styled-components';

export const ImageGridContainer = styled.div`
    display: flex;
    max-width: 650px;
    height: 532px;
    overflow-y:auto ;
    gap: 8px;
    flex-wrap: wrap;
    div {
        box-sizing: border-box;
    }
    input {
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: 600;
    color: #000;
`;

export const ButtonAdd = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    color: var(--primary-blue-5);
    width: 138px;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    svg * {
        stroke: var(--primary-blue-5);
    }
`;

export const ImageItem = styled.img`
    width: 138px;
    height: 100px;
    border-radius: 4px;
    object-fit: cover;
`;