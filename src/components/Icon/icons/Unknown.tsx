import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnknown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.571 8.429C9.571 7.089 10.661 6 12 6c1.34 0 2.429 1.09 2.429 2.429 0 1.01-.59 1.6-1.065 2.075l-.001.001c-.415.414-.649.668-.649 1.067v.2a.143.143 0 0 1-.143.142H11.43a.143.143 0 0 1-.143-.143v-.2c0-1.01.59-1.601 1.066-2.076.414-.414.648-.668.648-1.066a1.001 1.001 0 0 0-2 0 .143.143 0 0 1-.143.142H9.714a.143.143 0 0 1-.143-.142ZM12 14a.857.857 0 1 0 0-1.714A.857.857 0 0 0 12 14Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgUnknown;
