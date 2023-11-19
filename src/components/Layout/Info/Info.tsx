import "./LayoutInfo.css";
import React from "react";
interface IInfo {
  infoName: string;
  infoValue: string;
  colorProperty?: boolean;
}

export const Info = ({ infoName, infoValue, colorProperty }: IInfo) => {
  return (
    <div>
      <div className="infoName">{infoName}</div>
      <div
        className="infoValue"
        style={{ color: colorProperty ? "green" : "black" }}
      >
        {infoValue}
      </div>
    </div>
  );
};
