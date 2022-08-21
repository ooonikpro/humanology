import * as React from 'react';
import { SVGProps } from 'react';

const SvgCone = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.033 20.5h11.934a2 2 0 0 0 1.838-2.788l-.52-1.212-1.285-3-4.162-9.71c-.692-1.617-2.984-1.617-3.676 0L6 13.5l-1.286 3-.52 1.212a2 2 0 0 0 1.84 2.788ZM5 16.5h14M6 13.5h12"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SvgCone;
