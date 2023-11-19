import React from "react";
import { InfoFooter } from "./InfoFooter";
import "./FooterInfo.css";

export const FooterInfo = () => {
  return (
    <div className="footer-container">
      <InfoFooter infoName="ETH" infoValue="0.001672" title="Price" />
      <InfoFooter infoName="OMG" infoValue="0.00142" title="Amount" />
      <InfoFooter
        infoName="OMG"
        infoValue="0.00142"
        title="Total"
        isLastElement
      />
    </div>
  );
};
