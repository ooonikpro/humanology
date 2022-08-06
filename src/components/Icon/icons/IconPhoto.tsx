import * as React from "react";
import { SVGProps } from "react";

const SvgIconPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 8.976C3 4.055 4.055 3 8.976 3h6.048C19.945 3 21 4.055 21 8.976v6.048C21 19.945 19.945 21 15.024 21H8.976C4.055 21 3 19.945 3 15.024V8.976Z"
      stroke="currentColor"
    />
    <path
      d="m17.005 16.502-4.277-4.276c-3.48-3.48-4.972-3.48-8.451 0L3 13.502M21 13.67c-2.093-1.603-3.522-1.378-5.802.676"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M17 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" stroke="currentColor" />
  </svg>
);

export default SvgIconPhoto;
