export const formatCurrency = (value: number) => {
  return `R$ ${value.toLocaleString('Pt-Br', { minimumFractionDigits: 2 })}`;
};

export const formatMileage = (value: number) => {
  return `${value.toLocaleString('Pt-Br', { minimumFractionDigits: 0 })}km`;
};