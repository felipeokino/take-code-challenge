import { InputHTMLAttributes, SetStateAction, useRef } from 'react';

import Icon from '../Icon';

import { InputContainer, StyledInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    handleSearch: React.Dispatch<SetStateAction<string>>
};

export default function Input({ handleSearch }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const value = inputRef.current?.value ?? '';
    
    handleSearch(value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleClick();
  };

  return (
    <InputContainer>
      <StyledInput placeholder='Buscar...' ref={inputRef} onKeyUp={handleKeyUp}/>
      <Icon icon='search' isButton onClick={handleClick} />
    </InputContainer>
  );
}