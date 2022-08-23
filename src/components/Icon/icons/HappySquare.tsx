import * as React from 'react';
import { SVGProps } from 'react';

const SvgHappySquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 14a4.993 4.993 0 0 0 4 2 4.992 4.992 0 0 0 4-2M9 10.011V10M15 10.011V10"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

export default SvgHappySquare;
