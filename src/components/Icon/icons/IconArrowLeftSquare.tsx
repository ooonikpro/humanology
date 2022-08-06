import * as React from "react";
import { SVGProps } from "react";

const SvgIconArrowLeftSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12.125c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
      stroke="currentColor"
    />
    <path
      d="M8 12.125h8M11 9.125l-2.913 2.913a.123.123 0 0 0 0 .174L11 15.125"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconArrowLeftSquare;
