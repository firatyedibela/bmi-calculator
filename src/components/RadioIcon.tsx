import clsx from 'clsx';

type RadioIconProps = {
  isSelected: boolean;
};

export const RadioIcon = ({ isSelected }: RadioIconProps) => {
  const sharedStyles = 'w-[31px] h-[31px] rounded-full';

  return isSelected ? (
    <div
      className={clsx(
        sharedStyles,
        'radio-icon-active bg-blue-100 flex justify-center items-center'
      )}
    >
      <div className="w-[15px] h-[15px] rounded-full bg-blue-500"></div>
    </div>
  ) : (
    <div
      className={clsx(
        sharedStyles,
        'radio-icon-inactive border border-grey-500'
      )}
    ></div>
  );
};
