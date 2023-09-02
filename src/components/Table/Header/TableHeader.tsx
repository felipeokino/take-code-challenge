import { SetStateAction } from 'react';

import { icons } from '../../../utils/icons';
import Button from '../../Button';
import Input from '../../Input';

import { Header, Title } from './styles';

type TableHeaderProps = {
  label: string
  setFilter: React.Dispatch<SetStateAction<string>>
}

export default function TableHeader({ label, setFilter }: TableHeaderProps) {
  return (
    <Header>
      <div>
        <Title>{label}</Title>
        <Input handleSearch={setFilter} />
      </div>
      <div>
        <Button label='Filtrar' variant='text' icon={icons.filter} />
        <Button label='Adicinonar' variant='filled' icon={icons.plus} />
      </div>
    </Header>
  );
}
