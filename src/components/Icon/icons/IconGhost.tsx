import * as React from "react";
import { SVGProps } from "react";

const SvgIconGhost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 3a9 9 0 0 0-9 9v7.01c0 1.73 2.05 2.644 3.338 1.486l.649-.584a2 2 0 0 1 2.232-.302l1.887.943a2 2 0 0 0 1.788 0l1.887-.943a2 2 0 0 1 2.232.302l.65.584C18.948 21.654 21 20.74 21 19.009V12a9 9 0 0 0-9-9Z"
      stroke="currentColor"
    />
    <path
      d="M8 14a4.993 4.993 0 0 0 4 2 4.992 4.992 0 0 0 4-2M9 10.011V10M15 10.011V10"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconGhost;
