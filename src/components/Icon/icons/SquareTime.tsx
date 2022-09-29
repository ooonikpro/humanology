import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareTime = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12 7v4.52c0 .3.15.58.4.747L15 14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgSquareTime;
