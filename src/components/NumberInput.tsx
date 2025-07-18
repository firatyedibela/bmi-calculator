type NumberInputProps = {
  unit: 'cm' | 'kg' | 'ft' | 'in' | 'st' | 'lbs';
  name: string;
};

export const NumberInput = ({ unit, name }: NumberInputProps) => {
  return (
    <label className="p-6 flex gap-6 border rounded-[12px] cursor-pointer flex-1">
      <input type="number" name={name} className="outline-none w-full" />{' '}
      <span>{unit}</span>
    </label>
  );
};
