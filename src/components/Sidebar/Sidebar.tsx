import { useMemo } from "react";
import { CoinItem } from "./Coin/CoinItem";
import "./Sidebar.css";
export interface ICoin {
  text: string;
  value: number;
  color: string;
}
export const Sidebar = () => {
  const memoizedCoins: ICoin[] = useMemo(() => {
    return [
      { text: "OMG - USD", value: 3.47, color: "#23AE50" },
      { text: "KNS - USD", value: 11.1, color: "#23AE50" },
      { text: "LSK - USD", value: 3.3, color: "#23AE50" },
      { text: "VCC - USD", value: 25.17, color: "#23AE50" },
    ];
  }, []);
  return (
    <div className="sidebar">
      <div className="title">Popular pairs</div>
      {memoizedCoins.map((coin) => (
        <CoinItem text={coin.text} value={coin.value} color={coin.color} />
      ))}
    </div>
  );
};
