import { BmiResultCard } from './BmiResultCard';
import { useForm, FormProvider } from 'react-hook-form';
import { NumberInput } from './NumberInput';
import { getIdealWeightRange } from '../utils/getIdealWeightRange';
import { getMetricLength } from '../utils/getMetricLength';
import { RadioIcon } from './RadioIcon';

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
    <div className="p-6 flex flex-col gap-8 max-w-82 bg-white rounded-xl mt-10 m-auto shadow-xl">
      <header>
        <h2 className="text-preset-4 text-blue-900">
          Enter your details below
        </h2>
      </header>
      <FormProvider {...methods}>
        <form className="flex flex-col gap-8 w-full">
          <fieldset className="flex gap-4">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                value="metric"
                {...register('unitSystem', { required: true })}
                className="appearance-none"
              />
              <RadioIcon isSelected={unitSystem === 'metric'} />
              Metric
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                value="imperial"
                {...register('unitSystem', { required: true })}
                className="appearance-none"
              />
              <RadioIcon isSelected={unitSystem === 'imperial'} />
              Imperial
            </label>
          </fieldset>
          <fieldset>
            <legend className="mb-2">Height</legend>
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
            <legend className="mb-2">Weight</legend>
            {!isImperial ? (
              <NumberInput unit="kg" name="weightKg" />
            ) : (
              <div className="flex gap-4">
                <NumberInput unit="st" name="weightSt" />
                <NumberInput unit="lbs" name="weightLbs" />
              </div>
            )}
          </fieldset>
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
