export const getImperialWeight = (
  weightKg: number
): { weightSt: number; weightLbs: number } => {
  const totalLbs = weightKg * 2.205;
  const weightSt = Math.floor(totalLbs / 14);
  const weightLbs = totalLbs % 14;

  return { weightSt, weightLbs };
};
