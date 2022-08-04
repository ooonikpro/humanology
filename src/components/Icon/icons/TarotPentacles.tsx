import * as React from "react";
import { SVGProps } from "react";

const SvgTarotPentacles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.479 13.947C-.895 12.927.953 1.098 8.814 2.055c7.83.96 6.315 12.829-1.335 11.892Zm-3.586-2.78 1.39-2.68-2.17-1.971c-.46 1.566-.245 3.337.78 4.651ZM6.025 9.16l-.792 1.562 1.619-.816-.827-.746Zm.126-2.345-1.604-.194 1.166 1.04.438-.846ZM3.508 5.54l3.112.38L8.19 2.885C5.943 2.788 4.332 3.96 3.509 5.54Zm4.895-1.063L7.614 6.03l1.152.136-.363-1.69Zm-1.25 2.462L6.453 8.32l1.286 1.148 1.568-.786-.328-1.522-1.824-.222Zm1.304 3.173 1.429 1.274-.378-1.792-1.05.518Zm.658-7.117.676 3.297 3.193.383c-.393-1.737-1.642-3.255-3.869-3.68Zm1.9 9.278c1.402-1.005 2.137-2.76 2.101-4.484L10.374 9.15l.642 3.123Zm.67-4.782-1.69-.21.197.952 1.493-.742Zm-4.121 3.066L4.709 11.98c1.634 1.277 3.87 1.343 5.324.816l-2.47-2.24Z"
      fill="#202322"
    />
  </svg>
);

export default SvgTarotPentacles;