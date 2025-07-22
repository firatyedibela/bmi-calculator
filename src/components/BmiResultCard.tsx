import { getImperialWeight } from '../utils/getImperialWeight';
import { formatMetricWeightRange } from '../utils/formatMetricWeightRange';
import { formatImperialWeightRange } from '../utils/formatImperialWeightRange';

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

  let feedbackMessage: string = '';
  if (bmiValue) {
    if (bmiValue < 18.5) {
      feedbackMessage =
        'Your BMI is below the healthy range. You may need to gain weight for better health.';
    } else if (bmiValue > 25.9) {
      feedbackMessage =
        'Your BMI is above the healthy range. Losing some weight may help improve your health.';
    } else {
      feedbackMessage = 'Your BMI suggests you’re a healthy weight.';
    }
  }

  return (
    <div className="result-card w-full p-8 bg-blue-500 flex flex-col gap-4 text-white m-auto">
      {!!bmiValue && bmiValue > 0 && bmiValue < 1000 ? (
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center ">
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-preset-6">Your BMI is...</span>
            <span className="text-preset-2 xl:text-[64px]">
              {bmiValue?.toFixed(1)}
            </span>
          </div>
          <p className="text-preset-7 flex-1">
            {feedbackMessage} Your ideal weight is between{' '}
            <strong>
              {unitSystem === 'metric'
                ? formatMetricWeightRange(minWeight, maxWeight)
                : formatImperialWeightRange(imperialWeightRange)}
            </strong>
          </p>
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
