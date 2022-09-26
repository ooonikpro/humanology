import * as React from 'react';
import { SVGProps } from 'react';

const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" fill="none" />
        <path
            d="M3.5 11H6a2 2 0 0 1 2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2v3.5M8 4v1a2 2 0 0 0 2 2h.146C11.17 7 12 7.83 12 8.854c0 .702.397 1.344 1.025 1.659l.08.04a2 2 0 0 0 1.79 0l.08-.04A1.854 1.854 0 0 0 16 8.853C16 7.83 16.83 7 17.854 7H19.5M16 19.5V17a2 2 0 0 1 2-2h2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgGlobe;
