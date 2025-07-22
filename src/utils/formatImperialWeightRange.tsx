type TImperialWeightRange = {
  max: {
    weightSt: number;
    weightLbs: number;
  };
  min: {
    weightSt: number;
    weightLbs: number;
  };
};

export const formatImperialWeightRange = (
  imperialWeightRange: TImperialWeightRange
): string => {
  return `${imperialWeightRange.min.weightSt}st
          ${Math.floor(imperialWeightRange.min.weightLbs)}lbs -
          ${imperialWeightRange.max.weightSt}st
          ${Math.floor(imperialWeightRange.max.weightLbs)}lbs.`;
};
