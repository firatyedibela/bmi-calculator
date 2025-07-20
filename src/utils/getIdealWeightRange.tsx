export const getIdealWeightRange = (
  heightCm: number
): { minWeight: number; maxWeight: number } => {
  const minWeight = 18.5 * (heightCm / 100) ** 2;
  const maxWeight = 24.9 * (heightCm / 100) ** 2;
  return { minWeight, maxWeight };
};
