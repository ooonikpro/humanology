import * as React from 'react';
import { SVGProps } from 'react';

const SvgVitalRing = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21 3h-5.4a.6.6 0 0 0-.6.6V9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="M15.5 3.5C18.798 4.809 21 8.298 21 12c0 4.872-4.03 9-9 9s-9-4.128-9-9c0-3.265 1.81-6.475 4.5-8"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

export default SvgVitalRing;
