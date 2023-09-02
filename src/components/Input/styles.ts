import styled from 'styled-components';

export const InputContainer = styled.div`
    border: 1px solid #D1D1D1;
    border-radius: 6px;
    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;
export const StyledInput = styled.input`
    background-color: #FFF;
    height: 38px;
    border: none;
    outline: none;
    padding: 12px;
    padding-right: none;
    box-sizing: border-box;
    color: #000;
    
    &::placeholder {
        color: #A3A3A3;
    }
`;