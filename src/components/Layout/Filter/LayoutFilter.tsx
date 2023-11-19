import "./LayoutFilter.css";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useQueryClient } from "react-query";

export const LayoutFilter = (props: {
  setPeriod: (period: string, limit: number) => void;
}) => {
  const [alignment, setAlignment] = React.useState("1d");
  const queryClient = useQueryClient();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const handleClick = (val: string, limit: number) => {
    props.setPeriod(val, limit);
    queryClient.invalidateQueries(["todos"]);
  };
  return (
    <div className="layout-filter">
      <div className="filter-coin">ETH - OMG</div>
      <div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          export type Period = "histominute" | "histohour" | "histoday";
          <ToggleButton value="1d" onClick={() => handleClick("histoday", 1)}>
            1d
          </ToggleButton>
          <ToggleButton value="6h" onClick={() => handleClick("histohour", 6)}>
            6h
          </ToggleButton>
          <ToggleButton value="1h" onClick={() => handleClick("histohour", 1)}>
            1h
          </ToggleButton>
          <ToggleButton
            value="30m"
            onClick={() => handleClick("histominute", 30)}
          >
            30m
          </ToggleButton>
          <ToggleButton
            value="5m"
            onClick={() => handleClick("histominute", 5)}
          >
            5m
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
