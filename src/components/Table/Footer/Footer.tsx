import { ReactNode } from 'react';

import { Footer } from './styles';

type TableFooterProps = {
    children: ReactNode
}
export default function TableFooter({ children }: TableFooterProps) {
  return (
    <Footer>
      {children}
    </Footer>
  );
}