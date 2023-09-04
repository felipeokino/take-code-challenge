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


  if (loading) {
    return <Loader />;
  }

  return (
    <Table.Root>
      <Table.Header label='Veículos' setFilter={setFilter}/>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Dados do veículo</Table.Cell>
          <Table.Cell>REF</Table.Cell>
          <Table.Cell>Placa</Table.Cell>
          <Table.Cell>Data</Table.Cell>
        </Table.Row>
        {
          vehicles.map(vehicle => (
            <Table.Row key={vehicle.vehicle_uuid}>
              <VehicleCard vehicle={vehicle}/>
              <Table.Cell>{vehicle.reference}</Table.Cell>
              <Table.Cell>{vehicle.plate}</Table.Cell>
              <Table.Cell>24/07/2022</Table.Cell>
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
