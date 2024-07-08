import { createContext } from "react";
import "./App.css";

import GrandPa from "./components/GrandPa/GrandPa";
import { useState } from "react";
export const MoneyContext = createContext(10);

function App() {
  const [money, setMoney] = useState(1000);
  return (
    <>
      <MoneyContext.Provider value={{ money, setMoney }}>
        <GrandPa></GrandPa>
      </MoneyContext.Provider>
    </>
  );
}

export default App;
