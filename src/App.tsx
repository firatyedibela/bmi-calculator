import pageLogo from './assets/images/logo.svg';
import { HeroImage } from './components/HeroImage';
import { BmiCard } from './components/BmiCard';
import { LimitationsSection } from './components/LimitationsSection';
import curvedLineLeft from './assets/images/pattern-curved-line-left.svg';
import manEating from './assets/images/image-man-eating.webp';
import iconEating from './assets/images/icon-eating.svg';
import iconExercise from './assets/images/icon-exercise.svg';
import iconSleep from './assets/images/icon-sleep.svg';

function App() {
  return (
    <div className="wrapper pt-8 xl:pt-22 relative">
      <header className="max-w-[1160px] m-auto flex flex-col items-center xl:items-start gap-8 md:gap-10 xl:mb-6">
        <img
          src={pageLogo}
          alt="Page logo"
          className="w-9 h-9 xl:w-16 xl:h-16 xl:block "
        />
      </header>
      <main className="font-main  m-auto">
        <section className="max-w-[768px] xl:max-w-[1160px] px-6 sm:px-10 py-8 xl:p-0 m-auto flex flex-col gap-8 md:gap-10 xl:flex-row xl:gap-8 xl:mb-[120px]">
          <HeroImage />
          <div className="flex flex-col gap-6 xl:flex-1 xl:pt-18 xl:gap-8">
            <h1 className="text-preset-2 xl:text-[64px] text-blue-900 text-center xl:text-start max-w-[350px] xl:max-w-[460px] m-auto xl:m-0">
              Body Mass Index Calculator
            </h1>
            <p className="text-preset-6 text-grey-500 xl:text-start text-center xl:max-w-[465px]">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <BmiCard />
        </section>
        <section className="max-w-[1160px] bmi-info-section m-auto flex flex-col items-center gap-12 md:flex-row md:gap-18 relative pb-15 xl:px-0 xl:pb-20 lg:pt-13 xl:items-end">
          <div className="hidden xl:block xl:absolute right-8 top-0">
            <img src={curvedLineLeft} alt="curved line" />
          </div>
          <div className="max-w-[435px] xl:max-w-[564px] md:w-[319px] md:h-[411px] xl:h-[auto]">
            <img
              src={manEating}
              alt="Image of a man eating sushi"
              className="md:w-full md:h-full md:object-cover md:object-right"
            />
          </div>
          <div className="bmi-info flex flex-col gap-8 px-6 md:w-[331px] xl:max-w-[465px] md:p-0 xl:mb-12">
            <h2 className="text-preset-3 text-blue-900 xl:text-[48px]">
              What your BMI result means
            </h2>
            <p className="text-preset-6 text-grey-500 ">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </section>
        <div className="gradient-1 lg:w-[95%] lg:m-auto lg:rounded-r-[35px]">
          <section className="px-6 py-14 xl:max-w-[1160px] m-auto md:px-10 md:py-[60px] lg:px-2 xl:px-0 lg:py-23 flex flex-col gap-10 lg:flex-row lg:gap-8 relative">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:flex-col lg:gap-12 lg:items-start flex-1">
              <img src={iconEating} alt="Eating icon" className="w-16 h-16" />
              <div className="flex flex-col gap-6">
                <h3 className="text-preset-4 text-blue-900">Healthy eating</h3>
                <p className="text-preset-6 text-grey-500">
                  Healthy eating promotes weight control, disease prevention,
                  better digestion, immunity, mental clarity, and mood.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:flex-col lg:gap-12 lg:items-start flex-1">
              <img
                src={iconExercise}
                alt="Exercise icon"
                className="w-16 h-16"
              />
              <div className="flex flex-col gap-6">
                <h3 className="text-preset-4 text-blue-900">
                  Regular exercise
                </h3>
                <p className="text-preset-6 text-grey-500">
                  Exercise improves fitness, aids weight control, elevates mood,
                  and reduces disease risk, fostering wellness and longevity.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:flex-col lg:gap-12 lg:items-start flex-1">
              <img src={iconSleep} alt="Sleeping icon" className="w-16 h-16" />
              <div className="flex flex-col gap-6">
                <h3 className="text-preset-4 text-blue-900">Adequate sleep</h3>
                <p className="text-preset-6 text-grey-500">
                  Sleep enhances mental clarity, emotional stability, and
                  physical wellness, promoting overall restoration and
                  rejuvenation.
                </p>
              </div>
            </div>
          </section>
        </div>
        <LimitationsSection />
      </main>
    </div>
  );
}

export default App;
