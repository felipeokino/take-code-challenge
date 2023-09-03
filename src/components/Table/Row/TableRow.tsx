import { HTMLAttributes,ReactNode } from 'react';

import { TableRowContainer } from './styles';

type TableRowProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  children: ReactNode,
  onClick?: () => void
}

export default function TableRow({ children, ...props }: TableRowProps) {
  return (
    <TableRowContainer {...props}>{children}</TableRowContainer>
  );
}
