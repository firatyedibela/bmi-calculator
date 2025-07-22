import { limitations } from '../data/bmiLimitations';
import { LimitationCard } from './LimitationCard';
import curvedLineRight from '../assets/images/pattern-curved-line-right.svg';

export const LimitationsSection = () => {
  return (
    <section className="limitations-section flex flex-col gap-14 px-6 md:w-[686px] xl:w-[1160px] md:p-0 m-auto py-20 md:py-24 lg:py-26 relative">
      <header className="limitations-header text-center flex flex-col gap-8 xl:w-[564px] xl:absolute left-0 top-24 xl:text-start">
        <h2 className="text-preset-3 text-blue-900 ">Limitations of BMI</h2>
        <p className="text-preset-6 text-grey-500 ">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </header>
      <div className="hidden xl:block xl:absolute xl:left-40 xl:top-85">
        <img src={curvedLineRight} alt="curved line" />
      </div>
      <div className="limitations grid gap-4 md:gap-y-6 justify-center md:grid-cols-2 xl:pb-26 xl:w-[961px] xl:grid-cols-1 xl:absolute right-0 top-26">
        <div className="contents xl:flex xl:flex-row  relative h-[232px]">
          <LimitationCard
            {...limitations[0]}
            className="xl:absolute xl:top-0 xl:left-1/2"
          />
        </div>
        <div className="contents xl:flex xl:flex-row  justify-end gap-8">
          <LimitationCard {...limitations[1]} className="" />
          <LimitationCard {...limitations[2]} className="" />
        </div>
        <div className="contents xl:flex xl:flex-row  justify-start gap-8">
          <LimitationCard {...limitations[3]} className="" />
          <LimitationCard {...limitations[4]} className="race" />
        </div>
      </div>
    </section>
  );
};
