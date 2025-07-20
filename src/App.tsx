import pageLogo from './assets/images/logo.svg';
import { HeroImage } from './components/HeroImage';
import { BmiCard } from './components/BmiCard';

function App() {
  return (
    <div className="wrapper pt-8 xl:pt-22">
      <HeroImage />
      <header className="max-w-[1160px] m-auto flex flex-col items-center xl:items-start gap-8 md:gap-10 xl:mb-6">
        <img
          src={pageLogo}
          alt="Page logo"
          className="w-9 h-9 xl:w-16 xl:h-16 xl:block "
        />
      </header>
      <main className="font-main">
        <section className="max-w-[768px] xl:max-w-[1160px] px-6 sm:px-10 py-8 xl:p-0 m-auto flex flex-col gap-8 md:gap-10 xl:flex-row xl:gap-8">
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
      </main>
    </div>
  );
}

export default App;
