import * as React from "react";
import { SVGProps } from "react";

const SvgGenderFemale = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 6c0-2.205-1.795-4-4-4S4 3.795 4 6c0 2.035 1.53 3.72 3.5 3.965V11.5H6v1h1.5V14h1v-1.5H10v-1H8.5V9.965A4.002 4.002 0 0 0 12 6ZM5 6c0-1.655 1.345-3 3-3s3 1.345 3 3-1.345 3-3 3-3-1.345-3-3Z"
      fill="#202322"
    />
  </svg>
);

export default SvgGenderFemale;
