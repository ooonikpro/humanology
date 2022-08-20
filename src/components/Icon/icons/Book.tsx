import * as React from 'react';
import { SVGProps } from 'react';

const SvgBook = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9 24a1.001 1.001 0 0 0 1 1h16v2a1 1 0 0 1-1 1H10a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h15a1 1 0 0 1 1 1v18H10a1.001 1.001 0 0 0-1 1Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgBook;
