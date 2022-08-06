import * as React from "react";
import { SVGProps } from "react";

const SvgIconHelpCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" />
    <path
      d="M10 8.677a2 2 0 1 1 1.995 3.261c-.268.068-.495.286-.495.562v.5M12 16h.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconHelpCircle;
