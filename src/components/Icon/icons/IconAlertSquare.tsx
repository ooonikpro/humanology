import * as React from "react";
import { SVGProps } from "react";

const SvgIconAlertSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 7.625v5M12.5 15.625v-.011"
      stroke="#6B360D"
      strokeLinecap="round"
    />
    <path
      d="M3.5 11.625c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
      stroke="#6B360D"
    />
  </svg>
);

export default SvgIconAlertSquare;
