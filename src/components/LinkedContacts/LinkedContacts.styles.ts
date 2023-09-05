import styled from 'styled-components';

export const LinkedContactsContainer = styled.span`
    display: flex;
    gap: 8px;
    color: #000;
    align-items:center;
`;
export const Title = styled.span`
    color: #000;
    font-size: 14px;
    font-weight: 600;
`;

export const ContactCard = styled.span`
    display: flex;
    gap: 8px;
    margin-top: 16px;
    padding: 32px;
    align-items: center;
    color: #000;
    div {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        letter-spacing: -0.3px;
        span:first-of-type {
            font-size: 14px;
            /* font-weight: 600; */
        }
    }
    div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 64px;
        height: 64px;
        border-radius: 32px;
        &:first-of-type {
            border: 3px solid var(--primary-blue-5)
        }
        span {
            font-size: 20px;
            font-weight: 600;
            color: var(--primary-blue-5);
        }
    }
`;

export const LinkedContactsFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    svg *{
        stroke: var(--primary-blue-5);
    }
`;

export const ContactsToModal = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: fit-content;
`;

export const CreateNewContactContainer = styled.div`
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items:center;
    & > span:first-of-type {
        margin-bottom: 16px;
    }
    & > div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        button {
            height: 40px;
        }
    }
`;