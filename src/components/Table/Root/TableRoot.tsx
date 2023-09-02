
interface TableRootProps {
  children: React.ReactNode
}

export default function TableRoot({ children }: TableRootProps) {
  return (
    <div style={{ backgroundColor: '#FFF' }}>
      {children}
    </div>
  );
}
