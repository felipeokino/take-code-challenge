import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import TableHeader from './TableHeader';

const mockHandleAddFilter = vi.fn(() => {});
const mockHandleAdd = vi.fn(() => {});

test('Should can I set the table label', async () => {
  const screen = render(
    <TableHeader 
      label='Mock Title' 
      setFilter={vi.fn()} 
      onAdd={mockHandleAdd} 
      onAddFilter={mockHandleAddFilter} 
    />);

  expect(await screen.findByText(/Mock Title/i)).toBeDefined();

  const filterButton = await screen.findByText(/Filtrar/i);
  const addButton = await screen.findByText(/Adicionar/i);

  expect(filterButton).toBeDefined();
  expect(addButton).toBeDefined();

  await userEvent.click(filterButton);
  expect(mockHandleAddFilter).toHaveBeenCalledOnce();
  
  await userEvent.click(addButton);
  expect(mockHandleAdd).toBeCalled();
});