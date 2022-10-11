import * as React from 'react';
import { SVGProps } from 'react';

const SvgProvident = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.058 49.935V36.229l-10.446.12.092 13.61L10 50l.817-17.638 3.908-2.795 1.411-9.975 13.232-.14.077 2.744 4.227-.035.046-2.785 13.136-.141 1.654 10.503 4.67 2.564L54 49.9l-16.942.036ZM29.58 26.953l.133 4.605h3.811l.076-4.65-4.02.045ZM33.84 12.15 42.93 12l.427 4.575-9.588.04.07-4.464Zm-13.532.231 8.847-.15.127 4.414-9.344.035.37-4.299Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgProvident;
