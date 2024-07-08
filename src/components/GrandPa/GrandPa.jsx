import { useContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import { MoneyContext } from "../../App";

const GrandPa = () => {
  const { money } = useContext(MoneyContext);
  return (
    <div className="mx-auto h-[700px] w-[600px] text-center">
      <h1>I am grand pa</h1>
      <p> GrandPa-money:{money}</p>
      <div className="flex gap-5 m-4 p-2 rounded border-2 border-green-200 w-fit">
        <Dad></Dad>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default GrandPa;
