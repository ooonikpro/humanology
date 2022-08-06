import * as React from "react";
import { SVGProps } from "react";

const SvgIconMug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 8c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 5 5.068 5 6 5h8c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C17 6.602 17 7.068 17 8v6.667C17 19 16.15 20 10 20s-7-1-7-5.333V8Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M17 8h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconMug;
