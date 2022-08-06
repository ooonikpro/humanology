import * as React from "react";
import { SVGProps } from "react";

const SvgIconEnergy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4 8.04 11.476c-.128.24.058.524.343.524h7.234c.284 0 .468.281.341.52L12 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconEnergy;
