import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquarePlus = (props: SVGProps<SVGSVGElement>) => (
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
            stroke="#6B360D"
        />
        <path
            d="M8 12.125 16 12M12 8.062v8.001"
            stroke="#6B360D"
            strokeLinecap="round"
        />
    </svg>
);

export default SvgSquarePlus;
