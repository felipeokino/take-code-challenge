import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type PageContentProps = HtmlHTMLAttributes<HTMLDivElement> & {
    isOpen: boolean
}
export const PageContent = styled.div<PageContentProps>`
    width: ${props => props.isOpen ? 'calc(100vw - 280px)' : 'calc(100vw - 89px)'};
    height: calc(100vh - 72px);
    margin-left: ${props => props.isOpen ? '280px' : '89px'};
    margin-top: 72px;
    padding: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out ;
`;

type CollapseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOpen: boolean
}
export const CollapseSideBar = styled.button<CollapseButtonProps>`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #FFF;
    position: fixed;
    bottom: 16px;
    left: ${props => props.isOpen ? '200px' : '20px'};
    transition: all 0.3s ease-in-out;
    ${props => !props.isOpen && css`
        transform: rotate(180deg);
    `}
`;