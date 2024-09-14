import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [initialAmount, setInitialAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  console.log(`options : ${options}`)

  const covertHandler = () => {
    setConvertedAmount(initialAmount*currencyInfo[to]);
  }

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(initialAmount);
    setInitialAmount(convertedAmount);
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        covertHandler()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={initialAmount}
                            onAmountChange={setInitialAmount}
                            onCurrencyChange={setFrom}
                            currencyOptions={options}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onAmountChange={setConvertedAmount}
                            onCurrencyChange={setTo}
                            currencyOptions={options}
                            selectCurrency={to}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase
                        ()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
