import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

type NumberInputProps = {
  unit: 'cm' | 'kg' | 'ft' | 'in' | 'st' | 'lbs';
  name: string;
};

export const NumberInput = ({ unit, name }: NumberInputProps) => {
  const { register } = useFormContext();

  return (
    <label
      className={clsx(
        'p-6 flex gap-6 border border-grey-500 rounded-[12px] cursor-pointer flex-1',
        (unit === 'cm' || unit === 'kg') && 'xl:py-4'
      )}
    >
      <input
        type="number"
        className="outline-none w-full text-preset-4 text-blue-900"
        {...register(name, { required: true })}
      />
      <span className="text-preset-4 text-blue-500">{unit}</span>
    </label>
  );
};
