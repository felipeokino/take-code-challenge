import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { SelectOptionProps } from '../../types/types.common';

import Select from '.';

const mockOptions: SelectOptionProps[] = [
  { label: 'opt 1', value: '1' },
  { label: 'opt 2', value: '2' },
  { label: 'opt 3', value: '3' },
  { label: 'opt 4', value: '4' },
];

const mockFunctionClick = vi.fn();
test('should can see notification warning with count', async () => {
  const screen = render(<Select options={mockOptions} onClick={mockFunctionClick} value={mockOptions[0]} />);

  const option1 = await screen.findByText(mockOptions[0].label);

  expect(option1).toBeDefined();

  await userEvent.click(option1);
  const option2 = await screen.findByText(mockOptions[1].label);
  expect(option2).toBeDefined();

  await userEvent.click(option2);
  expect(mockFunctionClick).toBeCalledWith(mockOptions[1]);
});