import { ReactNode } from 'react';

import { TableBodyContainer } from './Body.styles';

type TableBodyProps = {
  children: ReactNode,
}
export default function TableBody({ children }: TableBodyProps) {
  return (
    <TableBodyContainer>
      {children}
    </TableBodyContainer>
  );
}
