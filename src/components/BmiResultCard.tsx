import { getImperialWeight } from '../utils/getImperialWeight';

type BmiResultCardProps = {
  bmiValue: number | null;
  maxWeight: number;
  minWeight: number;
  unitSystem: 'metric' | 'imperial';
};

export const BmiResultCard = ({
  bmiValue,
  maxWeight,
  minWeight,
  unitSystem,
}: BmiResultCardProps) => {
  let imperialWeightRange = {
    max: {
      weightSt: 0,
      weightLbs: 0,
    },
    min: {
      weightSt: 0,
      weightLbs: 0,
    },
  };

  if (unitSystem === 'imperial') {
    imperialWeightRange.max = getImperialWeight(maxWeight);
    imperialWeightRange.min = getImperialWeight(minWeight);
  }

  return (
    <div className="w-[280px] p-8 bg-blue-500 rounded-[16px] flex flex-col gap-6 text-white">
      {!!bmiValue ? (
        <div className="flex flex-col gap-2">
          <span className="text-preset-6">Your BMI is...</span>
          <span className="text-preset-2">{bmiValue?.toFixed(1)}</span>
          {unitSystem === 'metric' ? (
            <p className="text-preset-7">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between{' '}
              <strong>
                {minWeight.toFixed(1)}kgs - {maxWeight.toFixed(1)}kgs.
              </strong>
            </p>
          ) : (
            <p className="text-preset-7">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between{' '}
              <strong>
                {imperialWeightRange.min.weightSt}st{' '}
                {Math.floor(imperialWeightRange.min.weightLbs)}lbs -{' '}
                {imperialWeightRange.max.weightSt}st{' '}
                {Math.floor(imperialWeightRange.max.weightLbs)}lbs.
              </strong>
            </p>
          )}
        </div>
      ) : (
        <>
          <span className="text-preset-4">Welcome!</span>
          <p className="text-preset-7">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </>
      )}
    </div>
  );
};
