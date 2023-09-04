import { useState } from 'react';

import { generatePaginationList } from '../../utils';
import Icon from '../Icon';

import { PaginationContainer, PaginationItem } from './Pagination.styles';

type PaginationProps = {
    count: number
    currentPage: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination({ count, currentPage, setPage }: PaginationProps) {
  const paginationItems = generatePaginationList(currentPage, count);

  const handleForwards = () => setPage((prevState) => prevState + 1);
  const handleBackwards = () => setPage((prevState) => prevState - 1);

  return (
    <PaginationContainer>
      {currentPage > 1 && <PaginationItem backwards><Icon icon='arrowDown' isButton onClick={handleBackwards}/></PaginationItem>}
      {
        paginationItems.map(item => (
          <PaginationItem key={item} isActive={currentPage === item} onClick={() => setPage(+item)}>{item}</PaginationItem>
        ))
      }
      {currentPage < count && <PaginationItem forwards><Icon icon='arrowDown' isButton onClick={handleForwards} /></PaginationItem>}
    </PaginationContainer>
  );
}

