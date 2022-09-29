import * as React from 'react';
import { SVGProps } from 'react';

const SvgIntrovert = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11 17v-3.5a.5.5 0 0 0-.5-.5H7M13 7v3.5a.5.5 0 0 0 .5.5H17"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgIntrovert;
