import * as React from 'react';
import { SVGProps } from 'react';

const SvgIntuit = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" fill="none" />
        <path
            d="M7.121 7.05a7 7 0 0 1 9.9 0l2.121 2.122c1.334 1.333 2 2 2 2.828 0 .828-.666 1.495-2 2.828l-2.121 2.122a7 7 0 0 1-9.9 0L5 14.828c-1.333-1.333-2-2-2-2.828 0-.828.667-1.495 2-2.828L7.121 7.05Z"
            stroke="currentColor"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgIntuit;
