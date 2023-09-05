

import { ChangeEvent, useRef } from 'react';

import { VehicleType } from '../../pages/AddVehicle/mockVehicleData';
import Icon from '../Icon';

import { ButtonAdd, ImageGridContainer, ImageItem, Title } from './ImageGrid.styles';

type ImageGridProps = {

  vehicleSeed: VehicleType
  updateValues: (key: keyof VehicleType, field: string, value: unknown) => void
}
export default function ImageGrid({ vehicleSeed, updateValues }: ImageGridProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const addImage = (urls: string[]) => {
    updateValues('images', 'files', [ ...vehicleSeed.images.files, ...urls ]);
  };

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target?.files?.length) {
      const urls = [ ...event.target.files ].map(file => URL.createObjectURL(file));
      addImage(urls);
    }
  };
  const handleCickAdd = () => {
    inputRef.current?.click();
  };
  return (
    <>  
      <Title>Fotos do veículo</Title>
      <ImageGridContainer>
        <ButtonAdd onClick={handleCickAdd}>
          <Icon icon='plus' isButton={false}  />
          <span>Adicionar fotos</span>
          <input ref={inputRef} type='file' multiple onChange={handleSelectImage}/>
        </ButtonAdd>
        {
          vehicleSeed.images.files.map(image => (
            <ImageItem key={image} src={image} />
          ))
        }

      </ImageGridContainer>
    </>
  );
}

