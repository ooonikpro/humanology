import * as React from "react";
import { SVGProps } from "react";

const SvgFunction01Base = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 6a1 1 0 0 0-1 1v8H7a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2h-8V7a1 1 0 0 0-1-1Z"
      fill="#202322"
    />
  </svg>
);

export default SvgFunction01Base;
