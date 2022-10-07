import * as React from 'react';
import { SVGProps } from 'react';

const SvgTestSimple = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 7c0-3.294 1.588-4 9-4s9 .706 9 4-1.588 4-9 4-9-.706-9-4ZM3 17c0-3.294 1.588-4 9-4s9 .706 9 4-1.588 4-9 4-9-.706-9-4Z"
            stroke="currentColor"
            fill="none"
        />
    </svg>
);

export default SvgTestSimple;
