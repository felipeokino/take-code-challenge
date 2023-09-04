import { useNavigate } from 'react-router-dom';

import { SideBarItem as StyledItem } from './Sidebar.styles';


type SideBarItemProps = {
    active?: boolean
    label: string
    path?: string
    icon?: string
    childs?: SideBarItemProps[]
}

export default function SideBarItem({ label, icon, active, path='#' }: SideBarItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <StyledItem isActive={active} onClick={handleClick}>
      <img src={icon} alt="" />
      <span>{label}</span>
    </StyledItem>
  );
}