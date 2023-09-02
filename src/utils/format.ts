export const formatCurrency = (value: number) => {
  return `R$ ${value.toLocaleString('Pt-Br', { minimumFractionDigits: 2 })}`;
};

