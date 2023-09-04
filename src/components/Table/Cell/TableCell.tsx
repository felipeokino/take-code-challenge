import { Fragment, ReactNode } from 'react';

type TabeCellProps = {
    children: ReactNode | string
}
export default function TableCell({ children }: TabeCellProps) {
  const Element = typeof children === 'string' ? 'span' : Fragment; 
  return (
    <Element>
      {children}
    </Element>
  );
}