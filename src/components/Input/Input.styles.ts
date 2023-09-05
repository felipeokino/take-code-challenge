import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 38px;
    border: 1px solid #D1D1D1;
    border-radius: 6px;
    color: #000;
    position: relative;

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
    span.label {
        position: absolute;
        top: -10px;
        font-size: 10px;
        left: 12px;
        background-color: #FFFFFF;
        text-align: center;
        z-index: 1;
        color: #000;
    }
`;
export const StyledInput = styled.input`
    width: 100%;
    background-color: #FFF;
    height: 38px;
    border: none;
    outline: none;
    padding: 12px;
    padding-right: none;
    padding-left: 16px;
    box-sizing: border-box;
    position: relative;
    color: #000;
    font-weight: 600;
    &::placeholder {
        color: #A3A3A3;
    }
    
`;