import styled from 'styled-components';

export const VehiclePriceSection = styled.div`
    width: 100%; 
    gap: 8px;
    display: flex;
    flex-direction: column;
    & > div {
        width: 100%;
    }
    &.evaluation > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 12px;
        font-weight: 600;
        & > span:last-of-type {
                font-size: 14px;
             }
        &:first-of-type {
            background: #36B37E;
             width: 100%; 
             height: 48px; 
             border-radius: 6px 6px 0 0;
             color: #FFF;
            
        }
    }
`;