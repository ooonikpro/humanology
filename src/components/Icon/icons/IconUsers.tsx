import * as React from "react";
import { SVGProps } from "react";

const SvgIconUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.631 7.28a2.5 2.5 0 1 1 0 4.69M3 19.125c.691-2.307 2.47-3 6.5-3 4.03 0 5.809.693 6.5 3M17 15.125c2.403.095 3.53.638 4 2"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M13 9.625a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      stroke="currentColor"
    />
  </svg>
);

export default SvgIconUsers;
