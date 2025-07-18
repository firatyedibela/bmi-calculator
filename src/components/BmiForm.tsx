import { useForm } from 'react-hook-form';
import { NumberInput } from './NumberInput';

type FormFields = {
  unitSystem: 'metric' | 'imperial';
  height: number;
  weight: number;
};

export const BmiForm = () => {
  const { register, watch } = useForm<FormFields>();

  const isImperial = watch('unitSystem') === 'imperial';

  return (
    <form className="flex flex-col gap-8 w-full">
      <fieldset className="flex gap-4">
        <label>
          <input type="radio" value="metric" {...register('unitSystem')} />
          Metric
        </label>
        <label>
          <input type="radio" value="imperial" {...register('unitSystem')} />
          Imperial
        </label>
      </fieldset>
      <fieldset>
        <legend className="mb-2">Height</legend>
        {!isImperial ? (
          <NumberInput unit="cm" name="heightCM" />
        ) : (
          <div className="flex gap-4">
            <NumberInput unit="ft" name="heightFT" />
            <NumberInput unit="in" name="heightIN" />
          </div>
        )}
      </fieldset>
      <fieldset>
        <legend className="mb-2">Weight</legend>
        {!isImperial ? (
          <NumberInput unit="kg" name="weightKG" />
        ) : (
          <div className="flex gap-4">
            <NumberInput unit="st" name="weightST" />
            <NumberInput unit="lbs" name="weightLBS" />
          </div>
        )}
      </fieldset>
    </form>
  );
};
