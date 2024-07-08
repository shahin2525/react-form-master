import { useContext } from "react";
import { MoneyContext } from "../../App";

const Son = () => {
  const { money, setMoney } = useContext(MoneyContext);
  return (
    <div className="m-4 p-2 rounded border-2 border-red-400 w-fit">
      <h1>i am first son</h1>
      <p>{money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add-money</button>
    </div>
  );
};

export default Son;
