import { TableRootContainer } from './styles';

interface TableRootProps {
  children: React.ReactNode
}

export default function TableRoot({ children }: TableRootProps) {
  return (
    <TableRootContainer>
      {children}
    </TableRootContainer>
  );
}
