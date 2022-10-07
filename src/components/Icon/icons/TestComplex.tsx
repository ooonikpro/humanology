import * as React from 'react';
import { SVGProps } from 'react';

const SvgTestComplex = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 18c0-2.47 1.588-3 9-3s9 .53 9 3c0 2.47-1.588 3-9 3s-9-.53-9-3ZM3 11c0-1.647.706-2 4-2s4 .353 4 2-.706 2-4 2-4-.353-4-2ZM3 5c0-1.647.706-2 4-2s4 .353 4 2-.706 2-4 2-4-.353-4-2ZM13 11c0-1.647.706-2 4-2s4 .353 4 2-.706 2-4 2-4-.353-4-2ZM13 5c0-1.647.706-2 4-2s4 .353 4 2-.706 2-4 2-4-.353-4-2Z"
            stroke="currentColor"
            fill="none"
        />
    </svg>
);

export default SvgTestComplex;
