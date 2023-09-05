import styled from 'styled-components';

export const ModalRoot = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #111111DD;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
`;

export const ModalContent = styled.div`
    background-color: #FFF;
    width: 50%;
    display: flex;
    min-height: 400px;
    position: relative ;
    border-radius: 6px;
    & > button {
        position: absolute;
        top: -5px;
        right: -5px;
        background: none;
    }
`;
