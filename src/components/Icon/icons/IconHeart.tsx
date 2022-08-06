import * as React from "react";
import { SVGProps } from "react";

const SvgIconHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.632 13.08 5.62 6.352a2 2 0 0 0 2.996 0l5.62-6.351c1.673-1.891 2.542-4.269 1.285-6.536-1.452-2.62-4.113-3.156-6.426-1.396a13.084 13.084 0 0 0-1.766 1.654.284.284 0 0 1-.422 0 13.084 13.084 0 0 0-1.766-1.654C7.46 3.389 4.799 3.925 3.347 6.545 2.09 8.812 2.96 11.19 4.632 13.08Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconHeart;
