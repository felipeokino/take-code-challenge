import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import { Table } from '../../components/Table';
import VehicleCard from '../../components/VehicleCard';
import useVehicles from '../../utils/useVehicles';

const INITIAL_PAGE = 1;
export default function Vehicles() {
  const [ page, setPage ] = useState(INITIAL_PAGE);
  const { vehicles, setFilter, loading, lastPage } = useVehicles(page);
  const navigate = useNavigate();

  const handleCLick = (id: string) => {
    navigate(id);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Table.Root>
      <Table.Header label='Veículos' setFilter={setFilter}/>
      <Table.Body>
        <Table.Row>
          <span>Dados do veículo</span>
          <span>REF</span>
          <span>Placa</span>
          <span>Data</span>
        </Table.Row>
        {
          vehicles.map(vehicle => (
            <Table.Row key={vehicle.vehicle_uuid} onClick={() => handleCLick(vehicle.vehicle_uuid)}>
              <VehicleCard vehicle={vehicle}/>
              <span>{vehicle.reference}</span>
              <span>{vehicle.plate}</span>
              <span>24/07/2022</span>
            </Table.Row>
          ))
        }
      </Table.Body>
      <Table.Footer>
        <Pagination currentPage={page} count={lastPage} setPage={setPage} />
      </Table.Footer>
    </Table.Root>
  );
}
