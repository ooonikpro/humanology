import * as React from "react";
import { SVGProps } from "react";

const SvgQuadraWater = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.322 3c.055-.025 1.178.656 1.178.656-2.34 5.077-7.359-1.182-9.81 2.13L2.5 4.945C5.546.13 10.213 6.307 12.322 3Zm0 3.608c.055-.026 1.178.655 1.178.655-2.34 5.077-7.359-1.182-9.81 2.13L2.5 8.552c3.046-4.816 7.713 1.362 9.822-1.944Zm0 3.606c.055-.025 1.178.656 1.178.656-2.34 5.077-7.359-1.182-9.81 2.13l-1.19-.842c3.046-4.815 7.713 1.363 9.822-1.944Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgQuadraWater;
