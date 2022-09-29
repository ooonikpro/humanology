import * as React from 'react';
import { SVGProps } from 'react';

const SvgRational = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 8.976C3 4.055 4.055 3 8.976 3h6.048C19.945 3 21 4.055 21 8.976v6.048C21 19.945 19.945 21 15.024 21H8.976C4.055 21 3 19.945 3 15.024V8.976Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            d="M12 3v18M21 12H3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgRational;
