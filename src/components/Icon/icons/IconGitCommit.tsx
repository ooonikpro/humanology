import * as React from "react";
import { SVGProps } from "react";

const SvgIconGitCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 8.625a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" stroke="currentColor" />
    <path
      d="M3 11.625h6M15 11.625h6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconGitCommit;
