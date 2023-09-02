import { useCallback, useEffect, useState } from 'react';

import { VehicleProps } from '../types/types.common';


const useVehicles = () => {
  const [ vehicles, setVehicles ] = useState<VehicleProps[]>([]);
  const [ refetch, setRefecth ] = useState(true);
  const [ filter, setFilter ] = useState('');
  const [ filteredVehicles, setFilteredVehicles ] = useState<VehicleProps[]>([]);

  const fetchVehicles = useCallback(async () => {
    if (refetch) {
      try {
        const response = await fetch('http://www.mocky.io/v2/5eb553df31000060006994a8');

        const body: VehicleProps[] = await response.json();

        setVehicles(body.map(vehicle => ({ ...vehicle, plate: 'FZU7177', reference: 'a86d7sa8a' })));
        setFilteredVehicles(body.map(vehicle => ({ ...vehicle, plate: 'FZU7177', reference: 'a86d7sa8a' })));
      } catch (error) {
        throw new Error(`Occurred an error when fetch vehicles. Cause: ${error}`);
      } finally {
        setTimeout(() => {

          setRefecth(false);
        }, 2000);
      }
    }
  }, [ refetch ]);

  const useRefetch = () => setRefecth(true);

  const handleFilter = () => {
    let filteredList = [ ...vehicles ];
    if (filter) {
      const filterCondition = (vehicle: VehicleProps) => (vehicle.brand_name.toLowerCase() || vehicle.model_name.toLowerCase()).includes(filter.toLowerCase());
  
      filteredList = vehicles.filter(filterCondition);
    }
    setFilteredVehicles([ ...filteredList ]);
  };

  useEffect(() => {
    handleFilter();
  }, [ filter ]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  return {
    vehicles: filteredVehicles,
    refetch: useRefetch,
    setFilter,
    loading: refetch
  };
};

export default useVehicles;
