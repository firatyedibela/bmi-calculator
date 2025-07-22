import clsx from 'clsx';

type LimitationCardProps = {
  title: string;
  description: string;
  icon: string;
  className: string;
};

export const LimitationCard = ({
  title,
  description,
  icon,
  className,
}: LimitationCardProps) => {
  return (
    <div
      className={clsx(
        'limitation-card max-w-[327px] md:max-w-[365px] bg-white p-6 md:p-8 flex flex-col gap-4 rounded-[16px]',
        className
      )}
    >
      <div className="flex items-center gap-4 ">
        <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
        <h3 className="text-preset-5 text-blue-900">{title}</h3>
      </div>
      <p className="text-preset-6 text-grey-500">{description}</p>
    </div>
  );
};
