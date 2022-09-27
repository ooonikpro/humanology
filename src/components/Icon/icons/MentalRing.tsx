import * as React from 'react';
import { SVGProps } from 'react';

const SvgMentalRing = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21 21h-5.4a.6.6 0 0 1-.6-.6V15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="M15.5 20.5c3.298-1.308 5.5-4.798 5.5-8.5 0-4.872-4.03-9-9-9s-9 4.128-9 9c0 3.265 1.81 6.475 4.5 8"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

export default SvgMentalRing;
