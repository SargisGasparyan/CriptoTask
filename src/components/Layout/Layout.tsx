import React from "react";
import "./Layout.css";
import { LayoutFilter } from "./Filter/LayoutFilter";
import { LayoutInfo } from "./Info/LayoutInfo";
import { LayoutChart } from "./Diagram/LayoutChart";
import { FooterInfo } from "./FooterInfo/FooterInfo";

export const Layout = () => {
  const [info, setInfo] = React.useState<{
    period: string;
    limit: number;
  }>({ period: "histoday", limit: 1 });
  const setPer = (period: string, limit: number) => {
    setInfo({ period, limit });
  };
  return (
    <div className="layout">
      <LayoutFilter setPeriod={(period, limit) => setPer(period, limit)} />
      <LayoutInfo />
      <LayoutChart period={info.period} limit={info.limit} />
      <FooterInfo />
    </div>
  );
};
