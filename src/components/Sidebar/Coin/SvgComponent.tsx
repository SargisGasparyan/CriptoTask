export const SvgComponent = ({ color }: { color: string }) => {
  return (
    <div>
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="32"
        viewBox="0 0 74 32"
        fill="none"
      >
        <path
          d="M1.5 20L9.5 12L15.5 17L23.5 6.5L30.5 14L37 23L44 17L50.5 21.5L58.5 14H64L72.5 1.5"
          stroke="#23AE50"
          stroke-width="2"
        />
        <path
          d="M9.5 12L1.5 20V32H72.5V1.5L64 14H58.5L50.5 21.5L44 17L37 23L30.5 14L23.5 6.5L15.5 17L9.5 12Z"
          fill="url(#paint0_linear_2_51)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_51"
            x1="24.5"
            y1="6"
            x2="24.5"
            y2="33"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={color} />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
