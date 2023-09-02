import { HTMLAttributes,ReactNode } from 'react';

import { Container } from './styles';

type TableRowProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  children: ReactNode,
  onClick?: () => void
}

export default function TableRow({ children, ...props }: TableRowProps) {
  return (
    <Container {...props}>{children}</Container>
  );
}
