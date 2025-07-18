import pageLogo from './assets/images/logo.svg';

function App() {
  return (
    <main className="font-main">
      <section className="px-6 pt-8">
        <header className="text-center flex flex-col items-center gap-8">
          <img src={pageLogo} alt="Page logo" className="w-9 h-9" />
          <div className="flex flex-col gap-6">
            <h1 className="text-preset-2 text-blue-900 lg:text-[64px]">
              Body Mass Index Calculator
            </h1>
            <p className="text-preset-6 text-grey-500">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
        </header>
      </section>
    </main>
  );
}

export default App;
