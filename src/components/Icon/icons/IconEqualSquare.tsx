import * as React from "react";
import { SVGProps } from "react";

const SvgIconEqualSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 9h6M9 12h6M9 15h6"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
      stroke="#6B360D"
    />
  </svg>
);

export default SvgIconEqualSquare;
