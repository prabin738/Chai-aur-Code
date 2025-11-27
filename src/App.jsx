import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-purple-400 flex flex-col min-h-screen justify-center items-center">
      <div className="bg-yellow-500 w-96 h-64  flex flex-col gap-6 justify-center items-center border border-gray-200 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold">Counter</h1>
        <p className="font-semibold text-2xl">Your Clicked {count} times</p>
        <div className="flex gap-4">
          <button
            onClick={increase}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-xl cursor-pointer "
          >
            Increase
          </button>
          <button
            onClick={increase}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-xl cursor-pointer "
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
