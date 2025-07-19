import { useFormContext } from 'react-hook-form';

type NumberInputProps = {
  unit: 'cm' | 'kg' | 'ft' | 'in' | 'st' | 'lbs';
  name: string;
};

export const NumberInput = ({ unit, name }: NumberInputProps) => {
  const { register } = useFormContext();

  return (
    <label className="p-6 flex gap-6 border rounded-[12px] cursor-pointer flex-1">
      <input
        type="number"
        className="outline-none w-full"
        {...register(name, { required: true })}
      />
      <span>{unit}</span>
    </label>
  );
};
