import * as React from "react";
import { SVGProps } from "react";

const SvgIconUserSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
      stroke="#6B360D"
    />
    <path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="#6B360D" />
    <path
      d="M6 19c.638-2.307 2.28-3 6-3s5.362.642 6 2.95"
      stroke="#6B360D"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconUserSquare;
