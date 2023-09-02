import { useEffect, useState } from 'react';

import { SelectOptionProps } from '../types/types.common';

const fakeLocations: SelectOptionProps[] = [
  { label: 'Dryve - Ribeirão Preto', value: 'RP' },
  { label: 'Dryve - São Carlos', value: 'SCA' },
  { label: 'Dryve - Araraquara', value: 'AQA' },
];
export default function useLocations() {
  const [ locations, setLocations ] = useState<SelectOptionProps[]>([]);

  
  const fetchLocations = async () => {
    const fakeRequest = new Promise<SelectOptionProps[]>(resolve => {
      setTimeout(() => {
        resolve(fakeLocations);
      }, 1000);
    });

    await fakeRequest.then(value => {
      setLocations(value);
    });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return {
    locations,
  };
}