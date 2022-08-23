import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare4 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.7 13.56h-1.06V15h-.92v-1.44H9.44v-.87c.32-.7.583-1.39.79-2.07.206-.68.373-1.407.5-2.18h.95v.15a16.602 16.602 0 0 1-1.22 4.1h2.26V9.6h.92v3.09h1.06v.87Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquare4;
