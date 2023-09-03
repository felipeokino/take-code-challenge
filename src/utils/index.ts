export const generatePaginationList = (startAt: number, size: number) => {
  const startIndex = 0;
  const paginationSize = 6;
  const homes: Array<number | string> = [];
  homes.length = paginationSize;
      
  const pages =  [ 
    ...homes.fill(0, startIndex, paginationSize)
      .splice(startIndex, paginationSize)
      .map((_, idx) => startAt + idx+1 <= size ? startAt + idx : startAt-=1)
      .sort((a, b) => a - b), ...homes ];
      
  if (size - startAt > 6)
    pages[paginationSize-1] = '...';
  pages[paginationSize] = size;
  return pages;
};