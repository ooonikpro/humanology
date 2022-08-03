import * as React from "react";
import { SVGProps } from "react";

const SvgIconBookOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 6.4c0-1.804.353-2.314 1.917-2.39.317-.015.629-.086.918-.216C6.488 3.502 7.746 3 8.7 3c.748 0 1.682.308 2.366.582a2.52 2.52 0 0 0 1.868 0C13.618 3.308 14.552 3 15.3 3c.954 0 2.212.502 2.865.794.289.13.601.201.918.216C20.647 4.086 21 4.596 21 6.4v12.2c0 1.804-.353 2.314-1.917 2.39a2.02 2.02 0 0 1-.918-.196C17.512 20.502 16.254 20 15.3 20c-.748 0-1.682.308-2.366.582a2.52 2.52 0 0 1-1.868 0C10.382 20.308 9.448 20 8.7 20c-.954 0-2.212.502-2.865.794-.289.13-.601.21-.918.196C3.353 20.914 3 20.404 3 18.6V6.4Z"
      stroke="#6B360D"
    />
    <path
      d="M12 4v16"
      stroke="#6B360D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconBookOpen;
