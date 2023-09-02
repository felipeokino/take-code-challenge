import styled from 'styled-components';

export const NotificationContainer = styled.div`
    position: relative;
    img {
        width: 25px;
        height: 25px;
    }
`;
export const NotificationBadge = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #F00;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    border: 1px solid white;
    font-size: 8px;
`;

