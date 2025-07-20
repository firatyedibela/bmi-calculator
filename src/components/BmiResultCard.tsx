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
    <div className="result-card w-full p-8 bg-blue-500 flex flex-col gap-4 text-white m-auto">
      {!!bmiValue ? (
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center ">
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-preset-6">Your BMI is...</span>
            <span className="text-preset-2 xl:text-[64px]">
              {bmiValue?.toFixed(1)}
            </span>
          </div>

          {unitSystem === 'metric' ? (
            <p className="text-preset-7 flex-1">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between{' '}
              <strong>
                {minWeight.toFixed(1)}kgs - {maxWeight.toFixed(1)}kgs.
              </strong>
            </p>
          ) : (
            <p className="text-preset-7 flex-1">
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
