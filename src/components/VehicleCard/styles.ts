import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin: 10px 0;
    display: flex;
    gap: 1rem;
    color: #000;
`;

export const Thumbnail = styled.img`
  width: 96px;
  height: 72px;
  
  object-fit: cover;
  border-radius: 4px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 12px;
  height: 100%;
  span:first-child{
    font-weight: 600;
  }
  i {
    color: #a3a3a3;
  }
`;

export const CardTitle = styled.span`
  font-weight: 600;
`;

export const VehiclePrice = styled(CardTitle)`
  color: var(--primary-blue-5)
`;