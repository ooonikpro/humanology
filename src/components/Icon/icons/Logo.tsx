import * as React from "react";
import { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22.346 12.22-7.541-.46.04 2.121c2.414 1.564 4.93 3.41 6.498 5.648L19.41 20.93l-4.518-4.808.09 4.857L12.68 21l-.15-9.294H11.37l.013 9.207-2.306.021.034-5.007-4.6 4.992-1.907-1.332c1.484-2.177 4.057-4.172 6.513-5.801l.024-2.012-7.567.494.123-2.363 7.024-.04C6.39 8.287 4.019 6.392 2.614 4.334L4.52 3.002l6.303 6.847 2.158-.012L19.41 3l1.933 1.4c-1.496 2.122-3.855 3.915-6.161 5.424l7.168-.042-.004 2.438ZM11.899 7.976c-2.584.006-2.6-4.053.049-4.053s2.789 4.06-.045 4.06l-.004-.007Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLogo;
