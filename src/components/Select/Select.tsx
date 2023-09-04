import { MouseEvent, SelectHTMLAttributes, useState } from 'react';

import { SelectOptionProps } from '../../types/types.common';
import Icon from '../Icon';

import { OpenButton, Option, SelectContainer, SelectOptions } from './Select.styles';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    options: SelectOptionProps[],
    selectValue: SelectOptionProps | null,
    handleClick: (args1: SelectOptionProps) => void
    bordered?: boolean
    label?: string
}
export default function Select({ options, handleClick: onClick, selectValue, bordered, label, style = {} }: SelectProps) {
  const [ isOpen, setIsOpen ] = useState(false);
    
  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    if (onClick)
      onClick(JSON.parse(event.currentTarget.id));
    setIsOpen(false);
  };

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <SelectContainer bordered={bordered} onClick={handleOpen} style={style}>
      {label && <span className='label'>{label}</span>}
      {selectValue && <span>{selectValue?.label}</span>}
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
