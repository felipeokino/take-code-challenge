import { VehicleProps } from '../../types/types.common';
import { formatCurrency } from '../../utils/format.ts';

import { CardInfo,CardTitle, Container, Thumbnail, VehiclePrice } from './styles.ts';

type VehicleCardProps = {
  vehicle: VehicleProps
}
export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const { image, brand_name, name } = vehicle;
  return (
    <Container>
      <Thumbnail src={image}/>
      <CardInfo>
        <CardTitle>{brand_name}&nbsp;{vehicle.model_name}</CardTitle>
        <span>{name}</span>
        <span>{vehicle.manufacturing_year}/{vehicle.model_year} <DotIcon /> {vehicle.fuel_type}</span>
        <span>{vehicle.mileage} <DotIcon /> <VehiclePrice>{formatCurrency(vehicle.ad_selling_price)}</VehiclePrice></span>
      </CardInfo>
    </Container>
  );
}

const DotIcon = () => <i>&#x2022;</i>;