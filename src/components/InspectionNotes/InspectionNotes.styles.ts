import styled, { css } from 'styled-components';

export const InspectionNotesContainer = styled.div<{selecteds: number[]}>`
    color: #000;
    [class*="filled"] {
        cursor: pointer;
        ellipse {
            fill: #FFF;
        }
        path {
            fill: #000;
        }
    }
    ${props => props.selecteds.map(sel =>css`
        [class=${`filled-${sel}`}] {
            ellipse {
                fill: var(--primary-blue-5);
            }
            path {
                fill: #FFF !important;
            }
        }
    `)}  
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: 600;
`;