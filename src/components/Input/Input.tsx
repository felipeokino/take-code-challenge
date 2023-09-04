import { InputHTMLAttributes, SetStateAction, useRef } from 'react';

import { IconType } from '../../utils/icons';
import Icon from '../Icon';

import { InputContainer, StyledInput } from './Input.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  handleClick?: React.Dispatch<SetStateAction<string>> | ((args1: string) => void)
    label?: string
    icon?: IconType
};

export default function Input({ handleClick, label, icon, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const InternHandleClick = () => {
    const value = inputRef.current?.value ?? '';
    if (handleClick)
      handleClick(value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') InternHandleClick();
  };

  return (
    <InputContainer>
      {label && <span className="label">{label}</span>}
      <StyledInput {...props} ref={inputRef} onKeyUp={handleKeyUp}/>
      {icon && <Icon icon={icon} isButton={!!handleClick} onClick={InternHandleClick} />}
    </InputContainer>
  );
}