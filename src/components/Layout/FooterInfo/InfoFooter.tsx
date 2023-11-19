import React from "react";
import "./FooterInfo.css";
interface IInfo {
  infoName: string;
  infoValue: string;
  title: string;
  isLastElement?: boolean;
}

export const InfoFooter = ({
  infoName,
  infoValue,
  title,
  isLastElement,
}: IInfo) => {
  return (
    <div>
      <div className="titleFooter">{title}</div>
      {!isLastElement ? (
        <div className="infoFooter">
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clip-path="url(#clip0_1_178)">
                  <path
                    d="M11.6263 6H3.3737C2.75643 6 2.25 6.50217 2.25 7.12166V13.8783C2.25 14.4968 2.75309 15 3.3737 15H11.6263C12.2436 15 12.75 14.4978 12.75 13.8783V7.12166C12.75 6.50316 12.2469 6 11.6263 6ZM11.25 13.5H3.75001V7.49998H11.25V13.5Z"
                    fill="#525AAF"
                  />
                  <path
                    d="M7.63181 0H7.36821C5.37081 0 3.75 1.62323 3.75 3.62032V6.49065H5.25001V3.62032C5.25001 2.45116 6.19972 1.50001 7.36821 1.50001H7.63181C8.79967 1.50001 9.75001 2.45053 9.75001 3.62081V4.5H11.25V3.62077C11.25 1.62214 9.62816 0 7.63181 0Z"
                    fill="#525AAF"
                  />
                  <rect x="3" y="7" width="9" height="7" fill="#525AAF" />
                </g>
                <defs>
                  <clipPath id="clip0_1_178">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="infoValue">{infoValue}</span>
          </div>
          <div className="flex">
            <span>{infoName}</span>
            <span>
              <div className="line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="36"
                  viewBox="0 0 8 36"
                  fill="none"
                >
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 4)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 4)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(0.707107 0.707107 0.707107 -0.707107 4 0)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(0.707107 0.707107 0.707107 -0.707107 4 0)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(-0.707107 0.707107 0.707107 0.707107 8 32)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(-0.707107 0.707107 0.707107 0.707107 8 32)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 4 36)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                  <line
                    y1="-0.75"
                    x2="5.65685"
                    y2="-0.75"
                    transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 4 36)"
                    stroke="#90B8F6"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div className="infoFooter">
          <div className="total">6.749715 ETH</div>
        </div>
      )}
    </div>
  );
};
