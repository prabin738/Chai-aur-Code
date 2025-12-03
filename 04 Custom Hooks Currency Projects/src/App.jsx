import { useState } from "react";
import { Input } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  return <div>Hello</div>;
}

export default App;
