import NotFoundImage from '../../assets/images/NotFound.svg';

import { NotFoundContainer } from './styles';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <img src={NotFoundImage} alt='Uma imagem cartoonizada de um carro sendo rebocado por um caminhão guincho'/>
      <h1>Ops....</h1>
      <p>Me desculpe, mas não consegui encontrar.</p>
    </NotFoundContainer>
  );
}

