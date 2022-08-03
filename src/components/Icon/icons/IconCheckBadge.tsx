import * as React from "react";
import { SVGProps } from "react";

const SvgIconCheckBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.818 4.545-.19-.267a2 2 0 0 0-3.255 0l-.19.267a2 2 0 0 1-1.85.825l-.848-.094a2 2 0 0 0-2.209 2.209l.094.849a2 2 0 0 1-.825 1.848l-.267.19a2 2 0 0 0 0 3.255l.267.19a2 2 0 0 1 .825 1.85l-.094.848a2 2 0 0 0 2.209 2.209l.849-.094a2 2 0 0 1 1.848.825l.19.267a2 2 0 0 0 3.255 0l.19-.267a2 2 0 0 1 1.85-.825l.848.094a2 2 0 0 0 2.209-2.209l-.094-.849a2 2 0 0 1 .825-1.848l.267-.19a2 2 0 0 0 0-3.255l-.267-.19a2 2 0 0 1-.825-1.85l.094-.848a2 2 0 0 0-2.209-2.209l-.849.094a2 2 0 0 1-1.848-.825Z"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 1.819 1.819v0c.1.1.262.1.362 0v0L15 10"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconCheckBadge;
