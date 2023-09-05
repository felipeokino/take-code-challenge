import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 72px;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    z-index: 3;
    background-color: #FFFFFF;
    div {
        display: flex;
        gap: 8px;

        .logo, .settings, .notifications {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: aquamarine;
        }
    }
`;