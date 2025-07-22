export const getFormattedMetricRange = (
  minWeight: number,
  maxWeight: number
) => {
  return `${minWeight.toFixed(1)}kgs - ${maxWeight.toFixed(1)}kgs.`;
};
