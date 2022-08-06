import * as React from "react";
import { SVGProps } from "react";

const SvgIconPlaySquare = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
    />
    <path
      d="m10.9 8.8-.242-.139a.774.774 0 0 0-1.158.672v5.334c0 .594.642.966 1.158.671l.242-.138 4.2-2.4a.921.921 0 0 0 0-1.6l-4.2-2.4Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconPlaySquare;
