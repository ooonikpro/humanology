import * as React from "react";
import { SVGProps } from "react";

const SvgIconContacts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="#6B360D" />
    <path
      d="M9 21c.425-2.307 1.52-3 4-3s3.575.642 4 2.95"
      stroke="#6B360D"
      strokeLinecap="round"
    />
    <path
      d="M3 7h2M3 17h2M3 12h2"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconContacts;
