import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M17 3c1.105 0 2 .893 2 1.994v14.01c0 1.53-1.659 2.49-2.992 1.73l-3.016-1.717a2.006 2.006 0 0 0-1.984 0l-3.016 1.717c-1.333.76-2.992-.2-2.992-1.73V4.993C5 3.893 5.895 3 7 3h10Z"
            stroke="currentColor"
            strokeLinejoin="round"
        />
    </svg>
);

export default SvgBookmark;
