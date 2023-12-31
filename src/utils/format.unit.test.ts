import { expect,test } from 'vitest';

import { formatCurrency, formatMileage } from './format';

test.each([
  [ 123, 'R$ 123,00' ],
  [ 1234, 'R$ 1.234,00' ],
  [ 12345, 'R$ 12.345,00' ],
  [ 123456, 'R$ 123.456,00' ],
  [ 123.90, 'R$ 123,90' ],
  [ 1234.10, 'R$ 1.234,10' ],
])('should format number to pt-br currency', (value, expected) => {
  expect(formatCurrency(+value)).toBe(expected);
});

test.each([
  [ 123, '123km' ],
  [ 1234, '1.234km' ],
  [ 12345, '12.345km' ],
  [ 123456, '123.456km' ],
  [ 1234567, '1.234.567km' ],
  [ 1234567, '1.234.567km' ],
])('should format number to pt-br currency', (value, expected) => {
  expect(formatMileage(value)).toBe(expected);
});