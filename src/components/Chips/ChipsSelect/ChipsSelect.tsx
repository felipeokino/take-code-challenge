import { MouseEvent, useState } from 'react';

import { SelectOptionProps } from '../../../types/types.common';
import Icon from '../../Icon';
import { Chips } from '..';

import { OpenButton, Option, SelectContainer, SelectOptions } from './ChipsSelect.styles';

type ChipsSelectProps = {
    options: Array<SelectOptionProps & { hide: boolean }>
    onClick: (args1: SelectOptionProps) => void
    onDelete: (args1: SelectOptionProps) => void
    value: SelectOptionProps[]
    label: string
}
export default function ChipsSelect({ options, onClick, value, onDelete, label }: ChipsSelectProps) {
  const [ isOpen, setIsOpen ] = useState(false);
    
  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    if (onClick)
      onClick(JSON.parse(event.currentTarget.id));
    setIsOpen(false);
  };

  const handleOpen = () => setIsOpen(!isOpen);

  let valuesToShow = [ ...value ];
  if (valuesToShow.length > 1)
    valuesToShow = valuesToShow.slice(0, 1).map(el => el);
  const optionsToShow = options.filter(opt => !opt.hide);
  return (
    <SelectContainer bordered>
      <span className='label'>{label}</span>
      {
        valuesToShow.map(item => <Chips.Item key={item.label} onDelete={() => onDelete(item)}>{item.label}</Chips.Item>)
      }
      {value.length > 1 && <span>+{value.length-1} items</span>}
      {isOpen && <SelectOptions isOpen={isOpen} count={optionsToShow.length}>
        {
          optionsToShow.map(opt => <Option key={opt.value} id={JSON.stringify(opt)} onClick={handleClick}>{opt.label}</Option>)
        }
      </SelectOptions>}
      <OpenButton onClick={handleOpen}>
        <Icon isButton icon='arrowDown' />
      </OpenButton>
    </SelectContainer>
  );
}