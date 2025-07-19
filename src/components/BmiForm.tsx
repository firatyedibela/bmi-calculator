import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';
import { NumberInput } from './NumberInput';
import { useEffect } from 'react';

type FormFields = {
  unitSystem: 'metric' | 'imperial';
  heightCM?: number;
  heightFT?: number;
  heightIN?: number;
  weightKG?: number;
  weightST?: number;
  weightLBS?: number;
};

export const BmiForm = () => {
  console.log('rendering form...');
  const methods = useForm<FormFields>();
  const { register, watch, handleSubmit, trigger, getValues } = methods;

  const isImperial = watch('unitSystem') === 'imperial';

  const formFields = watch();

  useEffect(() => {
    const validate = async () => {
      const isValid = await trigger();
      if (isValid) {
        onSubmit(getValues());
      }
    };

    validate();
  }, [formFields]);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-8 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex gap-4">
          <label>
            <input
              type="radio"
              value="metric"
              checked={!isImperial}
              {...register('unitSystem', { required: true })}
            />
            Metric
          </label>
          <label>
            <input
              type="radio"
              value="imperial"
              {...register('unitSystem', { required: true })}
            />
            Imperial
          </label>
        </fieldset>
        <fieldset>
          <legend className="mb-2">Height</legend>
          {!isImperial ? (
            <NumberInput unit="cm" name="heightCM" />
          ) : (
            <div className="flex gap-4">
              <NumberInput unit="in" name="heightIN" />
              <NumberInput unit="ft" name="heightFT" />
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
        <button type="submit" className="border rounded-xl hover:shadow-lg">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
