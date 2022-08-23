import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareDots = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx={12} cy={14.563} r={0.5} fill="currentColor" />
        <circle cx={10} cy={14.563} r={0.5} fill="currentColor" />
        <circle cx={14} cy={14.563} r={0.5} fill="currentColor" />
    </svg>
);

export default SvgSquareDots;
