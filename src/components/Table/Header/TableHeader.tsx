import { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../Button';
import Input from '../../Input';

import { Header, Title } from './Header.styles';

type TableHeaderProps = {
  label: string
  setFilter: React.Dispatch<SetStateAction<string>>
  onAdd?: () => void
  onAddFilter?: () => void
}

export default function TableHeader({ label, setFilter, onAdd, onAddFilter }: TableHeaderProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('new');
  };
  return (
    <Header>
      <div>
        <Title>{label}</Title>
        <Input handleClick={setFilter} placeholder='Buscar...' icon='search' />
      </div>
      <div>
        <Button label='Filtrar' variant='text' icon='filter' />
        <Button label='Adicionar' variant='filled' icon='plus' onClick={handleClick} />
      </div>
    </Header>
  );
}
