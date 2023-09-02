import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SelectOptionProps } from '../../types/types.common';
import useLocations from '../../utils/useLocations';
import Icon from '../Icon';
import Notification from '../Notification';
import Profile from '../Profile';
import Select from '../Select';

import { HeaderContainer } from './styles';

export default function Header() {
  const nagivate = useNavigate();
  const { locations } = useLocations();
  
  const [ selected, setSelected ] = useState<SelectOptionProps|null>(null);

  const handleSelect = (value: SelectOptionProps) => {
    setSelected(value);
  };

  useEffect(() => {
    if (!selected)
      setSelected(locations[0]);
  }, [ locations ]);

  return (
    <HeaderContainer>
      <div>
        <Icon icon='logo' isButton onClick={() => nagivate('/')} />
        <div>
          <Icon icon='home' isButton={false}/>
          <Select options={locations} value={selected} onClick={handleSelect}/>
        </div>
      </div>

      <div>
        <Notification />
        <Icon icon='settings' isButton/>
        <Profile />
      </div>
    </HeaderContainer>
  );
}