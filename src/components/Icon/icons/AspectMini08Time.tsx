import * as React from "react";
import { SVGProps } from "react";

const SvgAspectMini08Time = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={2.5}
      y={2.5}
      width={19}
      height={19}
      rx={9.5}
      fill="#fff"
      stroke="#202322"
    />
    <path
      d="M12 16.1c.475 0 .756-.288.756-.786V8.23c0-.498-.281-.785-.756-.785-.469 0-.756.287-.756.785v7.085c0 .498.287.785.756.785Z"
      fill="#202322"
    />
  </svg>
);

export default SvgAspectMini08Time;
