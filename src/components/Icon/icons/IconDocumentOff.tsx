import * as React from "react";
import { SVGProps } from "react";

const SvgIconDocumentOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 3h4.343c.818 0 1.226 0 1.594.152.368.152.657.442 1.235 1.02l2.656 2.656c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594V14"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 5v12c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h8a2 2 0 0 0 2-2"
      stroke="#6B360D"
      strokeLinejoin="round"
    />
    <path
      d="m3 3 18 18"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconDocumentOff;
