export const getMetricLength = (lengthFt: number, lengthIn: number): number => {
  const totalInches = lengthFt * 12 + lengthIn;
  return totalInches * 2.54;
};
