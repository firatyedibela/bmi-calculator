import { BmiResultCard } from './BmiResultCard';
import { useForm, FormProvider } from 'react-hook-form';
import { NumberInput } from './NumberInput';
import { getIdealWeightRange } from '../utils/getIdealWeightRange';
import { getMetricLength } from '../utils/getMetricLength';
import { RadioIcon } from './RadioIcon';
import clsx from 'clsx';

type FormFields = {
  unitSystem: 'metric' | 'imperial';
  heightCm: number;
  heightFt: number;
  heightIn: number;
  weightKg: number;
  weightSt: number;
  weightLbs: number;
};

export const BmiCard = () => {
  const methods = useForm<FormFields>({
    defaultValues: {
      unitSystem: 'metric',
    },
  });
  const { register, watch } = methods;

  const [
    unitSystem,
    heightCm,
    heightFt,
    heightIn,
    weightKg,
    weightSt,
    weightLbs,
  ] = watch([
    'unitSystem',
    'heightCm',
    'heightFt',
    'heightIn',
    'weightKg',
    'weightSt',
    'weightLbs',
  ]);

  const isImperial = unitSystem === 'imperial';
  let bmi: number | null = null;

  if (unitSystem === 'metric') {
    const heightCmNum = Number(heightCm);
    const weightKgNum = Number(weightKg);

    if (heightCmNum > 0 && weightKgNum > 0) {
      const heightM = heightCmNum / 100;
      bmi = weightKgNum / (heightM * heightM);
    }
  } else if (unitSystem === 'imperial') {
    if (heightFt && heightIn && weightSt && weightLbs) {
      const totalLbs = weightSt * 14 + Number(weightLbs);
      const totalIn = heightFt * 12 + Number(heightIn);
      console.log(totalIn);

      bmi = (totalLbs / (totalIn * totalIn)) * 703;
    }
  }

  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 bg-white rounded-xl m-auto shadow-2xl">
      <header>
        <h2 className="text-preset-4 text-blue-900">
          Enter your details below
        </h2>
      </header>
      <FormProvider {...methods}>
        <form className="flex flex-col gap-6 sm:gap-8 w-full">
          <fieldset className="flex gap-6">
            <label className="flex items-center gap-4 cursor-pointer flex-1">
              <input
                type="radio"
                value="metric"
                {...register('unitSystem', { required: true })}
                className="appearance-none sr-only"
              />
              <RadioIcon isSelected={unitSystem === 'metric'} />
              <span className="text-preset-6 font-semibold text-blue-900">
                Metric
              </span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer flex-1">
              <input
                type="radio"
                value="imperial"
                {...register('unitSystem', { required: true })}
                className="appearance-none sr-only"
              />
              <RadioIcon isSelected={unitSystem === 'imperial'} />
              <span className="text-preset-6 font-semibold text-blue-900">
                Imperial
              </span>
            </label>
          </fieldset>
          <div
            className={clsx(
              'flex flex-col gap-4',
              !isImperial && 'sm:flex-row'
            )}
          >
            <fieldset>
              <legend className="mb-2 text-preset-7 text-grey-500">
                Height
              </legend>
              {!isImperial ? (
                <NumberInput unit="cm" name="heightCm" />
              ) : (
                <div className="flex gap-4">
                  <NumberInput unit="ft" name="heightFt" />
                  <NumberInput unit="in" name="heightIn" />
                </div>
              )}
            </fieldset>
            <fieldset>
              <legend className="mb-2 text-preset-7 text-grey-500">
                Weight
              </legend>
              {!isImperial ? (
                <NumberInput unit="kg" name="weightKg" />
              ) : (
                <div className="flex gap-4">
                  <NumberInput unit="st" name="weightSt" />
                  <NumberInput unit="lbs" name="weightLbs" />
                </div>
              )}
            </fieldset>
          </div>
        </form>
      </FormProvider>

      <BmiResultCard
        bmiValue={bmi}
        {...(!isImperial
          ? getIdealWeightRange(heightCm)
          : getIdealWeightRange(
              getMetricLength(Number(heightFt), Number(heightIn))
            ))}
        unitSystem={unitSystem}
      />
    </div>
  );
};
