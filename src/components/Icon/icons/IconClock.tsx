import * as React from "react";
import { SVGProps } from "react";

const SvgIconClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="#6B360D" />
    <path
      d="M12 7v5M21 4l-1-1"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconClock;
