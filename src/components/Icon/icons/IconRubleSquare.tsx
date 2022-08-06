import * as React from "react";
import { SVGProps } from "react";

const SvgIconRubleSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 8v9M9 15h6M11 8h2.5c3 0 3 4 0 4H9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
      stroke="currentColor"
    />
  </svg>
);

export default SvgIconRubleSquare;
