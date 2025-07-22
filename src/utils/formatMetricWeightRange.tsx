export const formatMetricWeightRange = (
  minWeight: number,
  maxWeight: number
): string => {
  return `${minWeight.toFixed(1)}kgs - ${maxWeight.toFixed(1)}kgs.`;
};
