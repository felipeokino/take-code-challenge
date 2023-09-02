import { MouseEvent, useState } from 'react';

import { SelectOptionProps } from '../../types/types.common';
import Icon from '../Icon';

import { OpenButton, Option, SelectContainer, SelectOptions } from './styles';

type SelectProps = {
    options: SelectOptionProps[],
    value: SelectOptionProps | null,
    onClick: (args1: SelectOptionProps) => void
}
export default function Select({ options, onClick, value }: SelectProps) {
  const [ isOpen, setIsOpen ] = useState(false);
    
  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    if (onClick)
      onClick(JSON.parse(event.currentTarget.id));
    setIsOpen(false);
  };

  const handleOpen = () => setIsOpen(!isOpen);

  console.log(value);
  return (
    <SelectContainer onClick={handleOpen}>
      {value && <span>{value?.label}</span>}
      {isOpen && <SelectOptions isOpen={isOpen} count={options.length}>
        {
          options.map(opt => <Option key={opt.value} id={JSON.stringify(opt)} onClick={handleClick}>{opt.label}</Option>)
        }
      </SelectOptions>}
      <OpenButton onClick={handleOpen}>
        <Icon isButton icon='arrowDown' />
      </OpenButton>
    </SelectContainer>
  );
}
