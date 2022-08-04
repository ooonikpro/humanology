import * as React from "react";
import { SVGProps } from "react";

const SvgIconUserCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 18.5c.691-2.307 2.47-3 6.5-3 4.03 0 5.809.693 6.5 3"
      stroke="#6B360D"
      strokeLinecap="round"
    />
    <path d="M13 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" stroke="#6B360D" />
    <path
      d="M15 4.5 16.5 6a.707.707 0 0 0 1 0L21 2.5"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconUserCheck;