import { Info } from "./Info";
import "./LayoutInfo.css";
import React from "react";

export const LayoutInfo = () => {
  return (
    <div className="layout-info">
      <Info infoName="Last trade price" infoValue="0.00167200 ETH" />
      <Info infoName="24 hour price" infoValue="23.3%" colorProperty />
      <Info infoName="24 hour price" infoValue="0.00167200 ETH" />
    </div>
  );
};
