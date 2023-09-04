import { SetStateAction } from 'react';

import Button from '../../Button';
import Input from '../../Input';

import { Header, Title } from './styles';

type TableHeaderProps = {
  label: string
  setFilter: React.Dispatch<SetStateAction<string>>
  onAdd?: () => void
  onAddFilter?: () => void
}

export default function TableHeader({ label, setFilter, onAdd, onAddFilter }: TableHeaderProps) {
  return (
    <Header>
      <div>
        <Title>{label}</Title>
        <Input handleSearch={setFilter} />
      </div>
      <div>
        <Button label='Filtrar' variant='text' icon='filter' />
        <Button label='Adicinonar' variant='filled' icon='plus' />
      </div>
    </Header>
  );
}
