import { useNavigate } from 'react-router-dom';

import { IconType } from '../../utils/icons';
import Icon from '../Icon';

import { SideBarItem as StyledItem } from './Sidebar.styles';


type SideBarItemProps = {
    active?: boolean
    label: string
    path?: string
    icon?: IconType
    childs?: SideBarItemProps[]
}

export default function SideBarItem({ label, icon, active, path='#' }: SideBarItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <StyledItem isActive={active} onClick={handleClick}>
      <Icon icon={icon} isButton={false} stroke={active && '$FFFFFF'} />
      <span>{label}</span>
    </StyledItem>
  );
}