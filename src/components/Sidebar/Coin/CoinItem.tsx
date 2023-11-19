import { ICoin } from "../Sidebar";
import { SvgComponent } from "./SvgComponent";
import "./CoinItem.css";

export const CoinItem = (props: ICoin) => {
  return (
    <div className="coin">
      <div>
        <div className="coins">{props.text}</div>
        <div className="price">${props.value}</div>
      </div>
      <SvgComponent color={props.color} />
    </div>
  );
};
