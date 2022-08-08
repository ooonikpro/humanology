import * as React from "react";
import { SVGProps } from "react";

const SvgIrratio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={6} cy={6} r={4.5} fill="currentColor" />
  </svg>
);

export default SvgIrratio;
