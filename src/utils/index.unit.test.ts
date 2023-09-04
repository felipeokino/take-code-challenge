import { expect,test } from 'vitest';

import { generatePaginationList } from '.';

test.each([
  [ 1, 20, [ 1,2,3,4,5,'...',20 ] ],
  [ 21, 30, [ 21,22,23,24,25,'...',30 ] ],
  [ 15, 20, [ 14,15,16,17,18,19,20 ] ],
])('should generate correct pagination list', (startAt, size, expected) => {
  expect(generatePaginationList(startAt, size)).toEqual(expected);
});