import { ReactNode } from 'react';

type TableBodyProps = {
  children: ReactNode,
  label?: string
}
export default function TableBody({ children, label }: TableBodyProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <span>{label}</span>
      {children}
    </div>
  );
}
