import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareA = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.645 14.85V15h-.93l-.48-1.53h-2.48l-.48 1.53h-.93v-.15l2.11-6.41h1.08l2.11 6.41Zm-1.68-2.23-.97-3.1-.97 3.1h1.94Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquareA;
