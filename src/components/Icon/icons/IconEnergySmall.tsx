import * as React from "react";
import { SVGProps } from "react";

const SvgIconEnergySmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 2 4.02 5.738c-.063.12.03.262.172.262h3.617c.142 0 .234.14.17.26L6 10"
      stroke="#202322"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconEnergySmall;
