import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare7 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.024 8.44v.85c-.686 1.087-1.19 2.07-1.51 2.95-.32.873-.48 1.713-.48 2.52V15h-.94v-.24c0-.773.164-1.623.49-2.55.334-.933.817-1.907 1.45-2.92h-3.23v-.85h4.22Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquare7;
