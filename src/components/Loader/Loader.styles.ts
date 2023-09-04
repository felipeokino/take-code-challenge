import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const pulse = keyframes`
    0%, 100% {
        transform: scale(1);
        box-shadow: 0px 0px 0px 2px #a3a3a3;

    }
    100% {
        transform: scale(2);
        box-shadow: 0px 0px 5px 10px #d3d3d3;
    }
`;

export const PulseLoader = styled.div`
    height: 30px;
    width: 30px;

    border-radius: 50%;
    background-color: var(--primary-blue-5);
    box-shadow: 0px 0px 15px 10px rgba(0,0,0,0.2);
    animation: ${pulse} 1.5s ease-in-out infinite alternate-reverse;
`;