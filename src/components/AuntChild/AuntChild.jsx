import { useContext } from "react";
import { MoneyContext } from "../../App";

const AuntChild = () => {
  const { money, setMoney } = useContext(MoneyContext);
  const handleMoney = () => {
    setMoney(2000 + money);
  };
  return (
    <div className="m-4 p-2 rounded border-2 border-purple-400 w-fit">
      i am aunt child
      <p>{money}</p>
      <button onClick={handleMoney}>Add-money</button>
    </div>
  );
};

export default AuntChild;
