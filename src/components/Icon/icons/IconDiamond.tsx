import * as React from "react";
import { SVGProps } from "react";

const SvgIconDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.306 5.956c.585-.836.878-1.254 1.312-1.48.434-.226.944-.226 1.965-.226h7.834c1.02 0 1.531 0 1.965.226.434.226.727.644 1.312 1.48l.598.853c.822 1.176 1.234 1.764 1.214 2.426-.02.663-.465 1.226-1.355 2.35l-5.276 6.665c-.733.926-1.1 1.39-1.528 1.59a2 2 0 0 1-1.694 0c-.428-.2-.795-.664-1.528-1.59l-5.276-6.664c-.89-1.125-1.336-1.688-1.355-2.35-.02-.663.392-1.251 1.215-2.427l.597-.853Z"
      stroke="#6B360D"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 7.75 8 8.5a1.207 1.207 0 0 0 .077 1.442L10 12.25"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconDiamond;
