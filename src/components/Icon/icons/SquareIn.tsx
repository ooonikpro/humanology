import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareIn = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            d="M7.75 12c0-3.5.75-4.25 4.25-4.25s4.25.75 4.25 4.25-.75 4.25-4.25 4.25S7.75 15.5 7.75 12Z"
            stroke="currentColor"
            fill="none"
        />
    </svg>
);

export default SvgSquareIn;
