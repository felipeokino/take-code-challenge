import { Container } from './styles';

type SideBarRootProps = {
    children: React.ReactNode
    isOpen: boolean
}


export default function SideBarRoot({ children, isOpen }: SideBarRootProps) {
  return (
    <Container isCollapsed={isOpen}>{children}</Container>
  );
}