import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // array of colors
  const colors = [
    { name: "Red", value: "red", textColor: "text-white" },
    { name: "Green", value: "green", textColor: "text-green" },
    { name: "Yellow", value: "yellow", textColor: "text-black" },
    { name: "Purple", value: "purple", textColor: "text-purple" },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
          {colors.map((c) => (
            <button
              key={c.value}
              style={{ backgroundColor: c.value }}
              onClick={() => setColor(c.value)}
              className="outline-none px-4 py-1 rounded-full font-semibold shadow-lg cursor-pointer"
            >
              {c.name}
            </button>
          ))}

          {/* <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button> */}
          {/* <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Green
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
