import * as React from "react";
import { SVGProps } from "react";

const SvgIconExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 3c-7.412 0-9 1.588-9 9s1.588 9 9 9 9-1.588 9-9"
      stroke="#6B360D"
      strokeLinecap="round"
    />
    <path
      d="M20.5 3.5 15 9M16 3h4.672c.181 0 .328.147.328.328V8"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconExternalLink;