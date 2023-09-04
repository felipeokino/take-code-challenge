import { HtmlHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

// --------------- ROOT -------------------

type ContainerProps = HtmlHTMLAttributes<HTMLDivElement> & {
    isCollapsed: boolean
}
export const Container = styled.nav<ContainerProps>`
    width: 280px;
    height: 100vh;
    padding: 1.5rem;

    background-color: #FFF;
    color: #000;

    position: fixed;
    left: 0;
    top: 72px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 8px;
    
    transition: width 0.3s ease-in-out;
    opacity: 1;

    z-index: 1;
    span {
        transition: opacity 0.3s ease-in-out;
    }
    ${props => !props.isCollapsed && css`
        width: 89px;

        div {
            width: 40px;
        }
        span {
            opacity: 0;
            user-select: none;
            pointer-events: none;
            cursor: default;
        }
    `}
`;


// ----------------- ITEM -------------------
type SideBarItemProps = {
    isActive?: boolean;
}
export const SideBarItem = styled.div<SideBarItemProps>`
    width: 100%;
    height: 40px;
    padding: 8px;
    box-sizing: border-box;

    border-radius: 6px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    font-weight: 600;
    
    cursor: pointer;

    img {
        filter: invert(1);
    }

    ${props => props.isActive && css`
        background-color: #0065FF;
        color: #FFFFFF;
        img {
            filter: invert(0);
        }
    `}
`;
