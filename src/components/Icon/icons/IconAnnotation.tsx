import * as React from "react";
import { SVGProps } from "react";

const SvgIconAnnotation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 9h10M7 12h6" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M21 13V7c0-1.886 0-2.828-.586-3.414C19.828 3 18.886 3 17 3H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v6c0 1.886 0 2.828.586 3.414C4.172 17 5.114 17 7 17h2.023a.86.86 0 0 1 .73.404l2.111 3.378c.063.1.21.1.272 0l2.159-3.453a.7.7 0 0 1 .593-.329H17c1.886 0 2.828 0 3.414-.586C21 15.828 21 14.886 21 13Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconAnnotation;
